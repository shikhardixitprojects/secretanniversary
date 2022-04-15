export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
export const handleLogin = (password) => {
  console.log(process.env);
  if (password === process.env.REACT_APP_CUSTOM_ENV_VAR) {
    setUser({
      name: `Palak 💖`
    });
    return true;
  }
  return false
}
export const isLoggedIn = () => {
  const user = getUser()
  // setUser({});
  return !!user.name
}
export const logout = callback => {
  setUser({})
  callback()
}