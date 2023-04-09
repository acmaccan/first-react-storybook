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

export const MyLabel = ({
  allCaps         = true,
  backgroundColor = 'transparent',
  color           = 'primary',
  fontColor,
  label           = 'No label',
  size            = 'normal',
}: MyLabelProps) => {
  return (
    <span 
    className={`label ${size} text-${color}`}
    style={{color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  );
};

export default MyLabel;