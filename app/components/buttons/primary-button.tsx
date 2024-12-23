import { Button } from "@/components/ui/button";
import Image from "next/image";

export type PrimaryButtonProps = {
  leftIcon?: string;
  rightIcon?: string;
  description?: string;
  iconSize?: number;
  text: string;
  width?: number;
  height?: number;
  classname?: string; // Updated to string
  onClick?: () => void;
  variant?: "default" | "destructive";
  style?: "filled" | "outlined";
  rel?: string; // Added rel prop
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    description,
    leftIcon,
    iconSize,
    rightIcon,
    text,
    variant,
    width,
    height,
    classname,
    style,
    onClick,
    rel,
  } = props;

  const defaultIconSize: number = 24;

  const baseClasses = "pointer-events-auto shadow-none";
  const filledClasses = "bg-[#1E3747] font-bold hover:bg-[#2c526a]";
  const outlinedClasses =
    "bg-transparent border border-[#1E3747] hover:bg-[#aebfca] text-[#1E3747] font-normal";

  return (
    <Button
      className={`${baseClasses} ${
        style === "filled" ? filledClasses : outlinedClasses
      } ${classname || ""}`}
      style={
        width
          ? {
              width: `${width}px`,
              height: height ? `${height}px` : "auto",
            }
          : {
              height: height ? `${height}px` : "auto",
            }
      }
      variant={variant || "default"}
      onClick={onClick}
      rel={rel}
    >
      {leftIcon && (
        <Image
          width={iconSize || defaultIconSize}
          height={iconSize || defaultIconSize}
          src={leftIcon}
          alt={`${description} left icon`}
        />
      )}
      <span className="mx-2">{text}</span>
      {rightIcon && (
        <Image
          width={iconSize || defaultIconSize}
          height={iconSize || defaultIconSize}
          src={rightIcon}
          alt={`${description} right icon`}
        />
      )}
    </Button>
  );
};
