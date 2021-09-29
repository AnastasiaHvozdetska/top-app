import { ButtonHTMLAttributes, DetailedHTMLProps, ReactChild } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactChild;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none'
}