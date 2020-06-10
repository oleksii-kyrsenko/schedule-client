import * as yup from 'yup';
import { IAuthFormData } from '../interfaces/authFormData';
import { AuthValidationEnum } from '../enums/validationEnum';

export const registrationValidationSchema: yup.ObjectSchema = yup
  .object()
  .shape<IAuthFormData>({
    name: yup.string().trim().required(AuthValidationEnum.RequiredName),
    email: yup
      .string()
      .trim()
      .required(AuthValidationEnum.RequiredEmail)
      .email(AuthValidationEnum.NotValidEmail),
    password: yup
      .string()
      .trim()
      .required(AuthValidationEnum.RequiredPassword)
      .min(5, AuthValidationEnum.NotValidPassword),
  });
