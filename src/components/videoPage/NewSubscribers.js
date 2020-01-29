import React, { useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { fetchAvatars } from '../../containers/api'
import { getRandom } from '../../containers/helperFunctions'
import { avatarQuery } from '../../words'

 const NewSubscribers = ({ match }) => {
  const { params } = match
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState([])

  useEffect(() => {
    fetchSubscriberAvatars()
  }, [params.videoId])

   const fetchSubscriberAvatars = async () => {
      let subscriberAvatars = await fetchAvatars(getRandom(avatarQuery), 21)
      subscriberAvatars = subscriberAvatars.data.hits
      mapSubscriberAvatarsToHtml(subscriberAvatars)
    }

    const mapSubscriberAvatarsToHtml = (subscriberAvatars) => {
      const newSubscribers = subscriberAvatars.map(avatar => {
        return (
          <a href={`/channel/${avatar.id}`} key={avatar.id} className={`${p}-new-subscribers-subscriber-img-anchor`} > 
            <img className={`${p}-new-subscribers-subscriber-img`} src={avatar.previewURL} alt="A New Subscriber" />
          </a>
        )
      })
      setState(prevState => ({...prevState, newSubscribers: newSubscribers}))
    }

  return (
    <div className={`${p}-new-subscribers-grid`}>
      {state.newSubscribers}
    </div>
  )
}


export default withRouter(NewSubscribers)