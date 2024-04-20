let bunnerIsExsist = null
let timer

const getReactionBanner = () => {
  return (
    document.querySelector('[aria-label="リアクションを送信"]') ??
    document.querySelector('[aria-label="Send a reaction"]') ??
    null
  )
}

const getReactionDOM = () => {
  const reactionBanner = getReactionBanner()

  return {
    heart: reactionBanner.querySelector('img[src*="1f496"]'),
    thumbsup: reactionBanner.querySelector('img[src*="1f44d"]'),
    tada: reactionBanner.querySelector('img[src*="1f389"]'),
    clap: reactionBanner.querySelector('img[src*="1f44f"]'),
    joy: reactionBanner.querySelector('img[src*="1f602"]'),
    openMouth: reactionBanner.querySelector('img[src*="1f62e"]'),
    cry: reactionBanner.querySelector('img[src*="1f622"]'),
    thinking: reactionBanner.querySelector('img[src*="1f914"]'),
    thumbsdown: reactionBanner.querySelector('img[src*="1f44e"]'),
  }
}

const startListenKeydown = () => {
  const reactionBanner = getReactionBanner()
  if (reactionBanner != null) {
    if (bunnerIsExsist != null) clearInterval(bunnerIsExsist)

    const reactions = getReactionDOM()
    Object.keys(reactions).forEach((key, index) => {
      reactions[key].parentNode.focus()
      const badge = document.createElement('div')
      badge.textContent = index + 1
      badge.classList.add('badge')
      reactions[key].parentNode.insertBefore(
        badge,
        reactions[key].nextElementSibling
      )
    })
    document.addEventListener('keydown', reactionKeydown)
  }
}

const reactionKeydown = (event) => {
  const inputElements = [...document.querySelectorAll('textarea, input')]

  const reactions = getReactionDOM()

  let typing = false
  inputElements.map((inputElement) => {
    if (inputElement === document.activeElement) {
      typing = true
    }
  })

  if (!typing) {
    switch (event.key) {
      case '1':
        reactions.heart.click()
        break
      case '2':
        reactions.thumbsup.click()
        break
      case '3':
        reactions.tada.click()
        break
      case '4':
        reactions.clap.click()
        break
      case '5':
        reactions.joy.click()
        break
      case '6':
        reactions.openMouth.click()
        break
      case '7':
        reactions.cry.click()
        break
      case '8':
        reactions.thinking.click()
        break
      case '9':
        reactions.thumbsdown.click()
        break
      default:
    }
  }
}

const main = (e) => {
  const callback = () => {
    const reactionButton =
      document.querySelector('[aria-label="リアクションを送信"]') ??
      document.querySelector('[aria-label="Send a reaction"]') ??
      null

    const reactionBanner = getReactionBanner()

    if (reactionButton != null) {
      clearInterval(buttonIsExsist)
      if (reactionBanner == null) reactionButton.click()

      bunnerIsExsist = setInterval(startListenKeydown, 1000)
    }
  }
  const buttonIsExsist = setInterval(callback, 1000)
}

window.addEventListener('load', main, false)
