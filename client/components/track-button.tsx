"use client";

import { Button } from "@/components/ui/button";
import { umami } from "@/lib/umami";
import Link from "next/link";

interface TrackButtonProps {
  eventName: string;
  href?: string;
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  className?: string;
  children: React.ReactNode;
}

export function TrackButton({
  eventName,
  href,
  variant,
  size,
  className,
  children,
}: TrackButtonProps) {
  const handleClick = () => {
    umami.track(eventName);
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <Button
          variant={variant}
          size={size}
          className={className}
          onClick={handleClick}
        >
          {children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
