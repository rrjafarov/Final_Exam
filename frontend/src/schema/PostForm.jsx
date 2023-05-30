import * as Yup from "yup";

export const PostForm = Yup.object({
  image: Yup.string().required(),
  country: Yup.string().email().required(),
  title: Yup.string().required(),
  paragraph: Yup.string().required(),
});


