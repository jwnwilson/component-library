import React from 'react';
import { default as MTextField, BaseTextFieldProps } from '@mui/material/TextField';

export interface TextAreaProps extends BaseTextFieldProps {
    /**
     * Button contents
     */
    label: string;
    name: string;
    value: string;
    rows: number;
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
    rows = 2,
    maxRows = Infinity,
    ...props
}: TextAreaProps) => {
    return (
        <MTextField
            type="text"
            multiline
            rows={rows}
            maxRows={maxRows}
            variant={variant}
            label={label}
            name={name}
            onChange={value => onChange(value)}
            value={value}
            sx={{ width: '100%' }}
            disabled={disabled}
        />
    );
};