import { ref } from 'vue'
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  isPending.value = true

  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    error.value = null
    isPending.value = false
    return res
  }
  catch(err) {
    console.log(err.message)
    error.value = '登錄資料不正確'
    isPending.value = false
  }
}

const useLogin = () => {
  return { error, login, isPending }
}

export default useLogin