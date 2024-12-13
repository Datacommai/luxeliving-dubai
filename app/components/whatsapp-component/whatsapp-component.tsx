import { Button } from "@/components/ui/button";
import Image from "next/image";

export const WhatsappComponent = () => {
  return (
    <section>
      <Button className="pointer-events-auto fixed xxs:bottom-2 lg:bottom-4 xxs:right-2 lg:right-4 bg-transparent hover:bg-[#25D366] rounded-full  p-4 w-fit h-fit shadow-none">
        <Image
          className="text-white"
          width={60}
          height={60}
          src="/assets/icons/whatsapp-icon-green.svg"
          alt="whatsapp icon"
        />
      </Button>
    </section>
  );
};
