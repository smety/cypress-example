window.addEventListener('load', function () {

  /** Open & close box **/
  document.getElementById('js-box-open').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('js-box').classList.toggle('visible')
  })
})