import React, { FC, ReactElement } from 'react';
import { FormHelperText } from '@material-ui/core';
import { useStyles } from './styles';

type TFormHelperMessageProps = {
  message: string;
  disabled?: boolean;
  error?: boolean;
  filled?: boolean;
  focused?: boolean;
  variant?: 'standard' | 'outlined' | 'filled';
};

export const FormHelperMessage: FC<TFormHelperMessageProps> = ({
  message,
  disabled = false,
  error = false,
  filled = false,
  focused = false,
  variant = 'standard',
}: TFormHelperMessageProps): ReactElement => {
  const classes = useStyles();

  return (
    <FormHelperText
      className={classes.root}
      disabled={disabled}
      error={error}
      filled={filled}
      focused={focused}
      variant={variant}>
      {message}
    </FormHelperText>
  );
};
