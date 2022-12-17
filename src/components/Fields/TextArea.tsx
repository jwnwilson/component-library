import React from 'react';
import { default as MTextField, BaseTextFieldProps } from '@mui/material/TextField';

export interface TextAreaProps extends BaseTextFieldProps {
    /**
     * Button contents
     */
    label: string;
    name: string;
    value: string;
    maxRows: number;
    onChange: (value:any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextArea = ({
    variant = "outlined",
    label,
    name,
    value,
    onChange,
    disabled,
    maxRows = 2,
    ...props
}: TextAreaProps) => {
    return (
        <MTextField
            type="text"
            multiline
            maxRows={maxRows}
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