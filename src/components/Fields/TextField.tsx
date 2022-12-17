import React from 'react';
import { default as MTextField, BaseTextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends BaseTextFieldProps {
    /**
     * Button contents
     */
    label: string;
    name: string;
    value: string;
    onChange: (value:any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextField = ({
    variant = "outlined",
    label,
    name,
    value,
    onChange,
    disabled,
    ...props
}: TextFieldProps) => {
    return (
        <MTextField
            type="text"
            variant={variant}
            label={label}
            name={name}
            onChange={value => onChange(value)}
            value={value ? value : ''}
            sx={{ width: '100%' }}
            disabled={disabled}
        />
    );
};