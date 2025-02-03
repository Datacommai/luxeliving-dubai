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
  <Card className="border-none shadow-none xs:w-[365px] xxs:w-[330px] p-0 mx-0 flex flex-col xxs:gap-2 sm:gap-4 mt-4">
   {/* Image Section */}
   <CardContent
    className="p-0"
    style={{
     width: '100%',
     height: 'fit-content', // Consistent height for image
    }}>
    <Image
     style={{
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '200px',
     }}
     width={200}
     height={200}
     src={image}
     alt={title}
     quality={100}
    />
   </CardContent>

   {/* Text Content */}
   <CardHeader className=" p-0">
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
   <CardContent className="p-0 space-y-1 w-full" style={{ height: '70px' }}>
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
   <CardFooter className="flex xxs:space-y-2 sm:space-y-4 flex-col p-0 justify-start items-start">
    <p className="text-left font-medium xxs:text-sm sm:text-2xl">
     From AED {price}
    </p>
    <PrimaryButton
     classname=" w-full"
     text="Discover"
     height={48}
     style="filled"
     onClick={() => onClick?.(title)}
    />
   </CardFooter>
  </Card>
 );
};
