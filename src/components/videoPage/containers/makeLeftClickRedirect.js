const makeLeftClickRedirect = (id, event) => {
  if (!event.ctrlKey) {
    window.location.href = `/video/id=#${id}`
    window.location.reload()
  }
}

export default makeLeftClickRedirect
