import { Button } from '@/components/ui/button';
import Image from 'next/image';

export type IconButtonProps = {
 icon: string;
 description: string;
 width: number;
 height: number;
 onClick?: () => void;
 variant?: 'default' | 'destructive';
};

export const IconButton = (props: IconButtonProps) => {
 const { description, icon, variant, width, height } = props;
 return (
  <Button
   style={{
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: 'transparent',
   }}
   variant={variant || 'default'}
   className="pointer-events-auto bg-transparent shadow-none"
   onClick={props.onClick}>
   <Image width={100} height={100} src={icon} alt={description} />
  </Button>
 );
};
