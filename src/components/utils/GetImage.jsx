import axios from "axios";


const GetImage = async (image) => {
  const formData = new FormData();
  formData.append('image', image)
  const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, formData)
//   console.log(data)
  return data.data.display_url
};

export default GetImage;