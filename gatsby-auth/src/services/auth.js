export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
export const handleLogin = ({ password }) => {
  if (password === `pass`) {
    setUser({
      name: `Welcome Palak 💖`
    });
    return true;
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.name
}
export const logout = callback => {
  setUser({})
  callback()
}