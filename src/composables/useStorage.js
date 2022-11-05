import { storage } from '../firebase/config'
// import { ref } from "vue";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import getUser from "./getUser"

const { user } = getUser()

const useStorage = () => {
  const error = ref(null)
  // const url = ref(null)
  // const filePath = ref(null)

  const uploadImage = async (file) => {
    //const storageReference = ref(storage,`covers/${user.value.uid}/${file.name}`);

    try {
      const res = await uploadBytesResumable(ref(storage,`covers/${user.value.uid}/${file.name}`), file);
      await getDownloadURL(res.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    } catch (err) {
      console.log(err.message)
      error.value = err
    }
  }

  return { uploadImage, error }
}

export default useStorage;