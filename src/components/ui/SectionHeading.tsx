import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  /** `dark` = ivory heading on an ink surface */
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2';
  className?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  as: Tag = 'h2',
  className,
}: SectionHeadingProps) => (
  <div className={clsx(align === 'center' && 'text-center mx-auto', 'max-w-2xl', className)}>
    <p className={clsx('eyebrow mb-4', tone === 'dark' && 'eyebrow-dark')}>{eyebrow}</p>
    <Tag
      className={clsx(
        'font-display font-semibold text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.12]',
        tone === 'dark' ? 'text-ivory' : 'text-ink',
      )}
    >
      {title}
    </Tag>
    {description && (
      <p
        className={clsx(
          'mt-5 text-base md:text-lg leading-relaxed',
          tone === 'dark' ? 'text-muted-dark' : 'text-muted',
        )}
      >
        {description}
      </p>
    )}
  </div>
);
