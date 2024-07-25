import {setCookie} from "cookies-next";
import {useRouter} from "next/navigation";

export default function useLogin() {
  const router = useRouter()
  const login = async (tel, pass) => {
    const user = {tel, pass}
    // const user = await authService.login(username, password)
    if (user) {
      const strUser = JSON.stringify(user)
      const expires = new Date()
      expires.setDate(expires.getDate() + 1)
      setCookie("currentUser", strUser, {expires})
      router.push('/')
    }
  }
  return {login};
}
