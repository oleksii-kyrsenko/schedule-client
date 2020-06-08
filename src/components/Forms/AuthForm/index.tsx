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
  const [loading, setLoading] = React.useState(false);

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Container component='main' maxWidth='xs' className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
          Авторизація
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            disabled={loading}
            variant='filled'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
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
            label='Password'
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
                Увійти
              </Typography>
            </Button>
            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                {'Не маєте облікового запису? Зареєструватися'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
