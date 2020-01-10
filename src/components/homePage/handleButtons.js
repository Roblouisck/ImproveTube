export const handleButtons = event => {
    const buttonID = event.target.id
    const unhighlightedText = document.querySelector('.unhighlitedText')
    const followingButton = document.querySelector('.home--grid-nav-following')
    const recommendedButton = document.querySelector('.home--grid-nav-recommended')
    const subscriptionsButton = document.querySelector('.home--grid-nav-subscriptions')

    const highlighted = (booleanOne, booleanTwo, booleanThree) => {
      followingButton.classList.remove('unhighlightedText')
      recommendedButton.classList.remove('unhighlightedText')
      subscriptionsButton.classList.remove('unhighlightedText')

      recommendedButton.classList.add(booleanOne)
      followingButton.classList.add(booleanTwo)
      subscriptionsButton.classList.add(booleanThree)
    }

    const yes = 'highlightedText'
    const no = 'unhighlightedText'

    switch (buttonID) {
      case 'recommendedButton':
        window.location.hash = 'rec'
        highlighted(yes, no, no)
      break

      case 'followButton':
        window.location.hash = 'fol'
        highlighted(no, yes, no)
      break

      case 'subscriptionsButton':
        window.location.hash = 'sub'
        highlighted(no, no, yes)
      break

      default:
        console.log('no cases')
    }
  }