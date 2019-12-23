import React from 'react'
import axios from 'axios'
import history from '../history'

export const fetchAvatars = (query, amount) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: process.env.PIXABAY_API,
      q: query,
      orientation: 'vertical',
      per_page: amount
    }
  })
}

export const fetchVideos = (amount, category, order) => {
  return axios.get('https://pixabay.com/api/videos/', {
    params: {
      key: process.env.PIXABAY_API,
      per_page: amount,
      category: category,
      editors_choice: true,
      order: order
    }
  })
}

export const fetchChannelPicture = async (id) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: process.env.PIXABAY_API,
      id: id
    }
  })
}