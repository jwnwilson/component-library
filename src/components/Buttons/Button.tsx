import React from 'react';
import {default as MButton} from '@mui/material/Button';

export interface ButtonProps {
  /**
   * Material UI options
   */
   color?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
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