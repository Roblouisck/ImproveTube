import { fetchAvatars } from '../../containers/api'
import { avatarQuery } from '../../words'
import { getRandom } from '../../containers/helperFunctions'

  export const determineAvatars = async (category, query, amount) => {
    // Categories correspond to Following, Recommended, Subscription Buttons
    if (category === 'buildings' || query === 'buildings') {
      let pictures = await fetchAvatars('man', amount)
      return pictures
    }
    else if (category === 'nature') {
      let pictures = await fetchAvatars('outdoors', amount)
      return pictures
    }
    else if (category === 'people') {
      let pictures = await fetchAvatars('model', amount)
      return pictures
    }
    else {
      let pictures = await fetchAvatars(getRandom(avatarQuery), amount)
      return pictures
    }
  }