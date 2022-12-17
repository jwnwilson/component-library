import React from 'react';
import {default as MButton, ButtonProps as MButtonProps} from '@mui/material/Button';

export interface ButtonProps extends MButtonProps {
  /**
   * Button contents
   */
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  label,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <MButton
      variant="contained"
      color={color}
      startIcon={icon}
      {...props}
    >
      {label}
    </MButton>
  );
};