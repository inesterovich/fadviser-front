import * as yup from 'yup';

export const RegistrationSchema = yup.object().shape({
  login: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(6, 'Пароль слишком короткий').required()
});

export const AuthorisationSchema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6, 'Пароль слишком короткий').required()
}).required();

export const CreateAccountSchema = yup.object().shape({
  name: yup.string(),
  sum: yup.number()
})

export const OperationSchema = yup.object().shape({
  _id: yup.string(),
  date: yup.date().required(),
  category: yup.string().required(),
  operationType: yup.string().required(),
  sum: yup.number().required()
})
