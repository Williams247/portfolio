import * as yup from "yup";

export const contactValidation = yup.object().shape({
  email: yup.string().email().required("email is required"),
  from: yup.string().required("your message credential is required"),
  message: yup.string().required("your message field is required"),
});
