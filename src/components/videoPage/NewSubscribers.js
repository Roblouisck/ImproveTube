import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
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
          <Link className={`${p}-new-subscribers-subscriber-img-anchor`} to={`/channel/${avatar.id}`} key={avatar.id}> 
            <img className={`${p}-new-subscribers-subscriber-img`} src={avatar.previewURL} alt="A New Subscriber" />
          </Link>
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


export default NewSubscribers