import React from 'react'
import axios from 'axios'

export const fetchAvatars = async () => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: process.env.PIXABAY_API,
      q: 'person',
      per_page: 50
    }
  })
}

export const fetchVideos = async (amount, category, order) => {
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