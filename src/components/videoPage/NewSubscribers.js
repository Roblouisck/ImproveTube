import React, { useState, useEffect} from 'react'
import { fetchAvatars } from '../../containers/api'

 const NewSubscribers = () => {
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState([])

  useEffect(() => {
    fetchSubscriberAvatars()
  }, [])

   const fetchSubscriberAvatars = async () => {
      let subscriberAvatars = await fetchAvatars('woman', 21)
      subscriberAvatars = subscriberAvatars.data.hits
      mapSubscriberAvatarsToHtml(subscriberAvatars)
    }

    const mapSubscriberAvatarsToHtml = (subscriberAvatars) => {
      const newSubscribers = subscriberAvatars.map(avatar => {
        return (
          <a className={`${p}-new-subscribers-subscriber-img-anchor`} href={`/channel/${avatar.id}`} key={avatar.id}> 
            <img className={`${p}-new-subscribers-subscriber-img`} src={avatar.webformatURL} />
          </a>
        )
      })
      setState(prevState => ({...prevState, newSubscribers: newSubscribers}))
    }

  return (
    <div>
      {state.newSubscribers}
    </div>
  )
}


export default NewSubscribers