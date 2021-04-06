import * as yup from 'yup';

export const RegistrationSchema = yup.object().shape({
  login: yup.string(),
  email: yup.string(),
  password: yup.string().min(6, 'Пароль слишком короткий')
}).required();
