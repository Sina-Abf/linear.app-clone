import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary:
        'bg-primary-button shadow-primary-high text-shadow hover:brightness-[115%] transition-colors',
      secondary: '',
      tertiary: ''
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-md px-6 h-12'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});

const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link
      className={buttonClasses({ variant, size })}
      href={href}
    >
      {children}
    </Link>
  );
};
export default Button;
