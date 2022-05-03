import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Hovered or not
   */
  hovered?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * How large should the button be?
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
export const Button = ({
  primary = false,
  hovered = false,
  size = 'medium',
  backgroundColor,
  color,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const test = hovered ? 'storybook-button--hover' : '';
  return (
    <button
      type='button'
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
        test,
      ].join(' ')}
      style={{ backgroundColor, color }}
      {...props}>
      {label}
    </button>
  );
};
