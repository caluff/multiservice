import {setCookie} from "cookies-next";

export default function useLogin() {

  const login = async (tel, pass) => {
    const user = {tel, pass}
    // const user = await authService.login(username, password)
    if (user) {
      const strUser = JSON.stringify(user)
      const expires = new Date()
      expires.setDate(expires.getDate() + 1)
      setCookie("currentUser", strUser, {expires})
    }
    return user
  };

  return {login};
}
