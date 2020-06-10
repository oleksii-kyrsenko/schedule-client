import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      top: '100%',
      padding: theme.spacing(0, 1),
      marginTop: '-0.5rem',
    },
  })
);
