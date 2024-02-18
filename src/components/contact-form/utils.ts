import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  email: yup.string().email().required("email is required"),
  from: yup.string().required("your message credential is required"),
  message: yup.string().required("your message field is required"),
});

export interface PayloadProps {
  email: string;
  from: string;
  message: string;
}

export const contactConstant = { email: "", from: "", message: "" };
