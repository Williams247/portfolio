import * as yup from "yup";

export const contactValidation = yup.object().shape({
  email: yup.string().required("Email is required"),
  from: yup.string().required("Your message credential is required"),
  message: yup.string().required("Your message field is required"),
});
