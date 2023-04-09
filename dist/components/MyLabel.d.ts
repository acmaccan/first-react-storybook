/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Label text
     */
    label: string;
    /**
     * Size label text
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalized text
     */
    allCaps?: true | false;
    /**
     * Text color
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado
     */
    fontColor?: string;
    /**
     * Color fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
