/// <reference types="react" />
import './button.css';
export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Qué tamaño debe tener el botón?
     */
    size?: 'small' | 'medium' | 'large';
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
export declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;
