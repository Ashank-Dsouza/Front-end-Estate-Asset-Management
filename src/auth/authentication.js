
export const getAuthState = () => {
  return {
    userToken: localStorage.getItem('userToken'),
    username: localStorage.getItem('username'),
    role: localStorage.getItem('role')
  }
}

export const login = (username) => {
    const token = localStorage.setItem('userToken', username)
    return {
      userToken: token
    }
  
}

export const logout = () => {
  return new Promise((resolve) => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('username')
    localStorage.removeItem('role')
    resolve(true)
  })
}