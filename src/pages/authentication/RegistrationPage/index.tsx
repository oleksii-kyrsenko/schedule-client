import React, { FC, useEffect } from 'react';
import {
  TextField,
  Container,
  CssBaseline,
  Typography,
  Button,
  Grid,
  Link,
  CircularProgress,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useStyles } from '../styles';
import { IAuthFormData } from '../interfaces/authFormData';
import { registrationValidationSchema } from '../validationSchemas/registrationValidationSchema';
import { FormHelperMessage } from '../../../components/FormHelperMessage';
import { NavLink } from 'react-router-dom';

export const RegistrationPage: FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState<boolean>(false);

  const { register, errors, handleSubmit } = useForm<IAuthFormData>({
    validationSchema: registrationValidationSchema,
  });

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    console.log(errors);
    // eslint-disable-next-line
  }, [errors]);

  const onSubmit = (data: IAuthFormData): void => {
    console.log(data);
  };

  return (
    <Container component='main' maxWidth='xs' className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
          Реєстрація
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.textFieldWrapper}>
              <TextField
                disabled={loading}
                variant='filled'
                margin='normal'
                required
                fullWidth
                id='name'
                label='Назва компанії'
                name='name'
                autoComplete='name'
                autoFocus
                inputRef={register}
                error={!!errors.name}
              />
              {errors.name && (
                <FormHelperMessage
                  error={true}
                  message={errors.name.message as string}
                />
              )}
            </Grid>
            <Grid item xs={12} className={classes.textFieldWrapper}>
              <TextField
                disabled={loading}
                variant='filled'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Електронна пошта'
                name='email'
                autoComplete='email'
                autoFocus
                inputRef={register}
                error={!!errors.email}
              />
              {errors.email && (
                <FormHelperMessage
                  error={true}
                  message={errors.email.message as string}
                />
              )}
            </Grid>
            <Grid item xs={12} className={classes.textFieldWrapper}>
              <TextField
                disabled={loading}
                variant='filled'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Пароль'
                type='password'
                id='password'
                autoComplete='current-password'
                inputRef={register}
                error={!!errors.password}
              />
              {errors.password && (
                <FormHelperMessage
                  error={true}
                  message={errors.password.message as string}
                />
              )}
            </Grid>
          </Grid>
          <div className={classes.wrapper}>
            <Button
              className={classes.submit}
              type='submit'
              fullWidth
              variant='outlined'
              disabled={loading}>
              <Typography variant='button' display='block'>
                Зареєструватися
              </Typography>
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Grid container justify='flex-end'>
            <Grid item>
              {loading ? (
                <Typography
                  variant='body2'
                  display='block'
                  className={classes.linkProgress}>
                  Маєте обліковий запис? Авторизуватися
                </Typography>
              ) : (
                <Link
                  href='#'
                  variant='body2'
                  component={NavLink}
                  to='/authorization'>
                  Маєте обліковий запис? Авторизуватися
                </Link>
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
