const fetchAlert = document.getElementById('js-fetch-alert');
const fetchCommentsButton = document.getElementById('js-fetch-data-button');
const commentList = document.getElementById('comment-list');

const emptyElement = element => {
  [...element.children].forEach(child => child.remove());
};

const renderComments = comments => {
  comments.forEach(({ name, email, body }) => {
    commentList.insertAdjacentHTML('beforeend', `
     <div class="comment-card">
        <h2>${name}</h2>
        <h4>${email}</h4>
        <p>${body}</p>
    </div>`);
  });
};

const fetchDataCallback = async e => {
  e.preventDefault();
  emptyElement(commentList);

  try {
    const commentResponse = await fetch('https://jsonplaceholder.typicode.com/comments');
    renderComments((await commentResponse.json()).slice(0, 5));
    fetchAlert.style.display = 'block';
  } catch (e) {
    console.warn(e.message);
  }
};

fetchCommentsButton.addEventListener('click', fetchDataCallback);