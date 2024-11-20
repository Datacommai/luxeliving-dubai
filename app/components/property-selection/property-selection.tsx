import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const PropertySelection = () => {
  return (
    <Card className="mt-10 rounded-md w-5/6 justify-self-center md:min-h-[139px] xxs:grid xxs:grid-cols-2 sm:grid-cols-3 md:grid md:grid-cols-4 xxs:gap-4 lg:gap-1 lg:flex items-center justify-between xxs:p-4 md:p-6 shadow-md border-none">
      {/* First  Select */}
      <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
        <p className="font-medium">Property Type</p>
        <Select>
          <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem className="capitalize" value="apple">
                house
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>

      {/* Second Property Type Select */}
      <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
        <p className="font-medium">Developers</p>
        <Select>
          <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="capitalize">Fruits</SelectLabel>
              <SelectItem className="capitalize" value="apple">
                house
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>

      {/* Third Property Type Select */}
      <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
        <p className="font-medium">City</p>
        <Select>
          <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="capitalize">cities</SelectLabel>
              <SelectItem className="capitalize" value="apple">
                Dubai
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>

      {/* Fourth Property Type Select */}
      <span className="flex flex-col xxs:gap-2 sm:gap-4 text-[#333333]">
        <p className="font-medium">Lifestyle</p>
        <Select>
          <SelectTrigger className="drop-down-icon xxs:h-[48px] xxs:w-full lg:w-[150px] xl:w-[220px] border-[#434343] focus:ring-0 md:h-[56px] text-[#434343]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="capitalize">Lifestyle</SelectLabel>
              <SelectItem className="capitalize" value="apple">
                Traditional
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>

      <Button className="text-sm xxs:col-span-2 md:col-span-4 lg:w-[152px] font-bold p-4 pr-6 sm:mt-10 md:mt-0 lg:mt-10 bg-[#1E3747] xxs:w-full xxs:h-[48px] md:h-[56px]  hover:bg-[#2c526a]">
        <Image
          width={17}
          height={17}
          src="/assets/icons/search-icon.svg"
          alt="search-icon"
          blurDataURL="blur"
          quality={100}
        />
        Search
      </Button>
    </Card>
  );
};
