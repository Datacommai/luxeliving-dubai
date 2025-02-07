import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { createRouteId, formatPrice } from '@/lib/utils';
import Image from 'next/image';

export type FeaturedPropertyProps = {
 title: string;
 description: string;
 price: number;
 image: string;
 beds: number;
 baths: number;
 sqft: number;
 onClick?: (id: string) => void;
};

export const FeaturedProperty = (props: FeaturedPropertyProps) => {
 const { title, description, price, image, beds, baths, sqft, onClick } = props;
 const routeId = createRouteId(title);

 return (
  <Card
   onClick={() => onClick?.(routeId)}
   className="border-none shadow-none p-0 m-0"
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
     style={{
      objectFit: 'cover',
      objectPosition: 'center',
      width: '100%',
      height: '200px',
     }}
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
    <CardDescription className="text-md font-light text-[#121212] line-clamp-2">
     {description}
    </CardDescription>
   </CardHeader>

   {/* Property Details */}
   <CardContent className="py-2 w-full" style={{ height: '70px' }}>
    <ul className="flex justify-between items-center">
     <li className="flex gap-2">
      <Image width={20} height={20} src="/assets/icons/bed.svg" alt="beds" />
      <p>{beds === 0 || !beds ? '-' : beds} beds</p>
     </li>
     <li className="flex gap-2">
      <Image
       width={20}
       height={20}
       src="/assets/icons/bath-tub.svg"
       alt="baths"
      />
      <p>{baths === 0 || !baths ? '-' : baths} baths</p>
     </li>
     <li className="flex gap-2">
      <Image width={20} height={20} src="/assets/icons/sqft.svg" alt="sqft" />
      <p>{sqft === 0 || !sqft ? '-' : sqft} sqft</p>
     </li>
    </ul>
   </CardContent>

   <Separator orientation="horizontal" />

   {/* Footer */}
   <CardFooter className="flex justify-between my-3" style={{ height: '50px' }}>
    <p className="font-normal capitalize">for sale</p>
    <b>AED {formatPrice(String(price))}</b>
   </CardFooter>
  </Card>
 );
};
