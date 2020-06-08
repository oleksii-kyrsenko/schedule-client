import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '50%',
      left: '50%',
      padding: theme.spacing(1),
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBlock: 'auto',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    wrapper: {
      position: 'relative',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(1),
    },
    submit: {
      padding: theme.spacing(1),
    },
    buttonProgress: {
      color: red[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    linkProgress: { cursor: 'not-allowed', pointerEvents: 'auto' },
  })
);
