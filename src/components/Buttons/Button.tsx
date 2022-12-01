import React from 'react';
import {default as MButton, ButtonProps as MButtonProps} from '@mui/material/Button';

export interface ButtonProps extends MButtonProps {
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  label,
  ...props
}: ButtonProps) => {
  return (
    <MButton
      variant="contained"
      color={color}
      {...props}
    >
      {label}
    </MButton>
  );
};