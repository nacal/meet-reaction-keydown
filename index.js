window.addEventListener('load', main, false)

const main = (e) => {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000)
  const jsLoaded = () => {
    if (document.querySelector('[aria-label="リアクションを送信"]') != null) {
      clearInterval(jsInitCheckTimer)
    }
    alert('loaded!!')
  }
}
