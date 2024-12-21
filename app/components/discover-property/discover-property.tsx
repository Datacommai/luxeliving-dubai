import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { PrimaryButton } from '../buttons/primary-button';

export type DiscoverPropertyProps = {
 title: string;
 image: string;
 location: string;
 developer: string;
 handover: string;
 price: number;
 onClick?: (id: string) => void;
};

export const DiscoverProperty = (props: DiscoverPropertyProps) => {
 const { title, price, location, handover, developer, image, onClick } = props;
 return (
  <Card
   className="border-none shadow-none p-0 mx-0 my-2"
   style={{
    width: '365px',
    height: '520px', // Consistent height
   }}>
   {/* Image Section */}
   <CardContent
    className="p-0"
    style={{
     width: '100%',
     height: '282px', // Consistent height for image
    }}>
    <Image
     style={{ objectFit: 'cover' }}
     width={1000}
     height={1000}
     src={image}
     alt={title}
     quality={100}
    />
   </CardContent>

   {/* Text Content */}
   <CardHeader className="px-4 py-2" style={{ height: '100px' }}>
    <CardTitle className="text-2xl font-bold text-start truncate">
     {title}
    </CardTitle>
    <CardDescription
     className="text-md font-light text-[#121212] line-clamp-2 flex justify-start items-center
    gap-1">
     <Image
      alt="location"
      src={'/assets/icons/location-icon.svg'}
      width={16}
      height={16}
     />
     <p>{location}</p>
    </CardDescription>
   </CardHeader>

   {/* Property Details */}
   <CardContent className="py-2 w-full" style={{ height: '70px' }}>
    <p className="font-normal text-lg text-[#434343]">
     Developer:
     <b className="text-lg text-[#434343] font-medium"> {developer}</b>
    </p>
    <p className="font-normal text-lg text-[#434343]">
     Handover: <b className="text-lg text-[#434343] font-medium"> {handover}</b>
    </p>
   </CardContent>

   <Separator orientation="horizontal" />

   {/* Footer */}
   <CardFooter
    className="flex flex-col justify-start items-start my-3"
    style={{ height: '50px' }}>
    <p className="text-left font-medium text-2xl">From AED {price}</p>
    <PrimaryButton
     classname="my-4"
     text="Discover"
     width={300}
     height={52}
     style="filled"
     onClick={() => onClick?.(title)}
    />
   </CardFooter>
  </Card>
 );
};
