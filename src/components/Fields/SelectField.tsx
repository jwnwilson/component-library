import React from 'react';
import { default as MTextField, StandardTextFieldProps } from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export interface Option {
    name: string;
    value: string;
}

export interface SelectFieldProps extends StandardTextFieldProps {
    /**
     * Button contents
     */
    label: string;
    name: string;
    value: string;
    choices: Array<Option>
    onChange: () => {};
}

/**
 * Primary UI component for user interaction
 */
export const SelectField = ({
    variant = "outlined",
    label,
    name,
    value,
    choices,
    onChange,
    disabled,
    ...props
}: SelectFieldProps) => {
    const menuItems = choices.map(
        (choice, index) => <MenuItem key={index} value={choice.value}>{choice.name}</MenuItem>
    );
    return (
        <MTextField
            select
            variant={variant}
            label={label}
            name={name}
            onChange={value => onChange(value)}
            value={value}
            sx={{ width: '100%' }}
            disabled={disabled}
        >
            {menuItems}
        </MTextField>
    );
};