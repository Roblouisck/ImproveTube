//Storing SVGs here to stay neat with my JSX

import React from 'react'

export const thumbsUp = (width) => {
  return (
    <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M198 448h172c15.7 0 28.6-9.6 34.2-23.4l57.1-135.4c1.7-4.4 2.6-9 2.6-14v-38.6c0-21.1-17-44.6-37.8-44.6H306.9l18-81.5.6-6c0-7.9-3.2-15.1-8.3-20.3L297 64 171 191.3c-6.8 6.9-11 16.5-11 27.1v192c0 21.1 17.2 37.6 38 37.6zM48 224h64v224H48z"/></svg>
    ) 
}

export const thumbsDown = (width) => {
    return (
      <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M314 64H142c-15.7 0-28.6 9.6-34.2 23.4L50.6 222.8c-1.7 4.4-2.6 9-2.6 14v38.6c0 21.1 17 44.6 37.8 44.6h119.3l-18 81.5-.6 6c0 7.9 3.2 15.1 8.3 20.3l20 20.1L341 320.7c6.8-6.9 11-16.5 11-27.1v-192c0-21.1-17.2-37.6-38-37.6zM400 64h64v224h-64z"/></svg>
      ) 
  }

export const arrowDrop = () => {
    return (
      <svg width="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z"/></svg>
      ) 
  }

export const arrowLeftSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
  )
}


export const videoCameraSVG = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 16c0 1.104-.896 2-2 2h-12c-1.104 0-2-.896-2-2v-8c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v8zm8-10l-6 4.223v3.554l6 4.223v-12z"/>
    </svg>
  )
}

export const magnifyingGlassSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
    </svg>
  )
}


