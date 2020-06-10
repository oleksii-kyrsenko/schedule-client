import * as yup from 'yup';
import { IAuthFormData } from '../interfaces/authFormData';
import { AuthValidationEnum } from '../enums/validationEnum';

export const authorizationValidationSchema: yup.ObjectSchema = yup
  .object()
  .shape<IAuthFormData>({
    email: yup
      .string()
      .trim()
      .required(AuthValidationEnum.RequiredEmail)
      .email(AuthValidationEnum.NotValidEmail),
    password: yup.string().trim().required(AuthValidationEnum.RequiredPassword),
  });
