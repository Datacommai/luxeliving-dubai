import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const AIButton = ({ onClick }: { onClick: () => void }) => {
 return (
  <Button
   onClick={onClick}
   variant="secondary"
   className="bg-white rounded-full border-yellow-500 border-4 fixed bottom-4 right-4 w-20 h-20 flex justify-center shadow-md">
   <Image alt="AI" width={50} height={50} src="/assets/icons/ai.png" />
  </Button>
 );
};
