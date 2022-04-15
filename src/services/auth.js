export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))
export const handleLogin = (password) => {
  console.log(process.env.GATSBY_TEST_VAR);
  if (password === process.env.GATSBY_TEST_VAR) {
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