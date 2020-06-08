import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  Container,
  CssBaseline,
  Typography,
  Button,
  Grid,
  Link,
  CircularProgress,
} from '@material-ui/core';

import { useStyles } from './styles';

export const AuthForm: FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [authMode, setAuthMode] = React.useState<boolean>(true);

  const linkText = authMode
    ? 'Не маєте облікового запису? Зареєструватися'
    : 'Маєте обліковий запис? Авторизуватися';

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleLinkClick = () => setAuthMode(!authMode);

  return (
    <Container component='main' maxWidth='xs' className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
          {authMode ? 'Авторизація' : 'Реєстрація'}
        </Typography>
        <form className={classes.form} noValidate>
          {!authMode && (
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
            />
          )}
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
          />
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
          />
          <div className={classes.wrapper}>
            <Button
              className={classes.submit}
              type='submit'
              fullWidth
              variant='outlined'
              disabled={loading}
              onClick={handleButtonClick}>
              <Typography variant='button' display='block'>
                {authMode ? 'Авторизуватися' : 'Зареєструватися'}
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
                  {linkText}
                </Typography>
              ) : (
                <Link href='#' variant='body2' onClick={handleLinkClick}>
                  {linkText}
                </Link>
              )}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
