import { Button } from '@/components/ui/button';
import Image from 'next/image';

export type PrimaryButtonProps = {
 leftIcon?: string;
 rightIcon?: string;
 description?: string;
 iconSize?: number;
 text: string;
 width?: number;
 height?: number;
 classname?: string; // Updated to string
 onClick?: () => void;
 variant?: 'default' | 'destructive';
 style?: 'filled' | 'outlined';
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
 const {
  description,
  leftIcon,
  iconSize,
  rightIcon,
  text,
  variant,
  width,
  height,
  classname,
  style,
  onClick,
 } = props;

 const defaultIconSize: number = 24;

 const createStyles = () => {
  switch (style) {
   case 'filled':
    return {
     width: `${width}px`,
     height: `${height}px`,
     backgroundColor: '#1E3747',
     fontWeight: 700,
    };
   case 'outlined':
    return {
     width: `${width}px`,
     height: `${height}px`,
     backgroundColor: 'transparent',
     border: '1px solid #1E3747',
     color: '#1E3747',
     fontWeight: 400,
    };
   default:
    return {
     width: `${width}px`,
     height: `${height}px`,
     backgroundColor: '#1E3747',
     fontWeight: 700,
    };
  }
 };

 return (
  <Button
   style={createStyles()}
   variant={variant || 'default'}
   className={`pointer-events-auto bg-transparent shadow-none ${
    classname || ''
   }`}
   onClick={onClick}>
   {leftIcon && (
    <Image
     width={iconSize || defaultIconSize}
     height={iconSize || defaultIconSize}
     src={leftIcon}
     alt={`${description} left icon`}
    />
   )}
   <span className="mx-2">{text}</span>
   {rightIcon && (
    <Image
     width={iconSize || defaultIconSize}
     height={iconSize || defaultIconSize}
     src={rightIcon}
     alt={`${description} right icon`}
    />
   )}
  </Button>
 );
};
