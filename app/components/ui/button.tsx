import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary:
        'bg-primary-button shadow-primary-high text-shadow hover:brightness-[115%] transition-[filter] duration-[160ms] font-medium',
      secondary: [
        'text-off-white bg-white bg-opacity-10 border border-transparent-white',
        'hover:bg-opacity-20 transition-colors duration-[260ms] ease-in font-medium'
      ]
    },
    size: {
      small: 'text-xs px-3 h-7',
      medium: 'text-sm px-4 h-8',
      large: 'text-medium px-6 h-12'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium'
  }
});

const Button = ({
  children,
  href,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Link
      {...props}
      className={buttonClasses({ variant, size })}
      href={href}
    >
      {children}
    </Link>
  );
};
export default Button;
