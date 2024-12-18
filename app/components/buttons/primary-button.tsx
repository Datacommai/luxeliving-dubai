import { Button } from "@/components/ui/button";
import Image from "next/image";

export type PrimaryButtonProps = {
  leftIcon?: string;
  rightIcon?: string;
  description?: string;
  text: string;
  width?: number;
  height?: number;
  classname?: string; // Updated to string
  onClick?: () => void;
  variant?: "default" | "destructive";
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    description,
    leftIcon,
    rightIcon,
    text,
    variant,
    width,
    height,
    classname,
    onClick,
  } = props;

  return (
    <Button
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: "#1E3747",
      }}
      variant={variant || "default"}
      className={`pointer-events-auto bg-transparent shadow-none ${
        classname || ""
      }`}
      onClick={onClick}
    >
      {leftIcon && (
        <Image
          width={24}
          height={24}
          src={leftIcon}
          alt={`${description} left icon`}
        />
      )}
      <span className="mx-2">{text}</span>
      {rightIcon && (
        <Image
          width={24}
          height={24}
          src={rightIcon}
          alt={`${description} right icon`}
        />
      )}
    </Button>
  );
};
