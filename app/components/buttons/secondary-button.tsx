import { Button } from '@/components/ui/button';

type SecondaryButtonProps = {
 title: string;
 onClick?: () => void;
 variant: 'filled' | 'outlined';
 width?: number;
 height?: number;
};

export const SecondaryButton = (props: SecondaryButtonProps) => {
 const { title, onClick, variant, width, height } = props;

 const createStyles = () => {
  switch (variant) {
   case 'filled':
    return {
     width: `${width}px`,
     height: `${height}px`,
     backgroundColor: '#D1AF49',
     fontWeight: 700,
    };
   case 'outlined':
    return {
     width: `${width}px`,
     height: `${height}px`,
     backgroundColor: 'transparent',
     border: '1px solid #D1AF49',
     fontWeight: 400,
    };
  }
 };

 return (
  <Button
   onClick={onClick}
   style={createStyles()}
   className="rounded-lg text-[#333333]"
   variant="default">
   {title}
  </Button>
 );
};
