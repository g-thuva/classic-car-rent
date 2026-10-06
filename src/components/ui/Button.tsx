import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
  /** Internal route */
  to?: string;
  /** External / tel: / mailto: link */
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  /** `dark` = rendered on an ink surface; `light` = on ivory/white */
  tone?: 'light' | 'dark';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  'aria-label'?: string;
}

export const Button = ({
  to,
  href,
  variant = 'primary',
  tone = 'light',
  className,
  children,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) => {
  const variantClass = {
    primary: tone === 'dark' ? 'btn-primary-dark' : 'btn-primary-light',
    outline: tone === 'dark' ? 'btn-outline-dark' : 'btn-outline-light',
    ghost: tone === 'dark' ? 'btn-ghost-dark' : 'btn-ghost-light',
  }[variant];

  const classes = clsx('btn', variantClass, className);

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
};
