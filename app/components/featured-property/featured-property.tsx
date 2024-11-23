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

export type FeaturedPropertyProps = {
 title: string;
 description: string;
 price: number;
 image: string;
 beds: number;
 baths: number;
 sqft: number;
};

export const FeaturedProperty = (props: FeaturedPropertyProps) => {
 const { title, description, price, image, beds, baths, sqft } = props;
 return (
  <Card
   className="border-none shadow-none p-0 m-0"
   style={{
    width: '365px',
    height: '514px',
   }}>
   <CardContent className="p-0" style={{ width: 'inherit', height: '282px' }}>
    <Image
     style={{ objectFit: 'cover' }}
     width={1000}
     height={1000}
     src={image}
     alt={title}
     quality={100}
    />
    <CardHeader className="px-4 py-2">
     <CardTitle className="text-2xl font-bold text-start">{title}</CardTitle>
     <CardDescription className="text-md font-light">
      {description}
     </CardDescription>
    </CardHeader>
    <CardContent className="py-2 w-full">
     <ul className="flex justify-between items-center">
      <li className="flex gap-2">
       <Image width={20} height={20} src="/assets/icons/bed.svg" alt="beds" />
       <p>{beds} beds</p>
      </li>
      <li className="flex gap-2">
       <Image
        width={20}
        height={20}
        src="/assets/icons/bath-tub.svg"
        alt="baths"
       />
       <p>{baths} baths</p>
      </li>
      <li className="flex gap-2">
       <Image width={20} height={20} src="/assets/icons/sqft.svg" alt="sqft" />
       <p>${sqft} sqft</p>
      </li>
     </ul>
    </CardContent>
    <Separator orientation="horizontal" />
    <CardFooter className="flex justify-between my-3">
     <p className="font-normal  capitalize">for sale</p>
     <b>AED {price}</b>
    </CardFooter>
   </CardContent>
  </Card>
 );
};
