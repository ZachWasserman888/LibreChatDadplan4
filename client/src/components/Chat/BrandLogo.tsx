// client/src/components/BrandLogo.tsx
import Image from "next/image";
import { useRouter } from "next/router";

export default function BrandLogo({
  size = 56,
  alt = "Brand",
}: { size?: number; alt?: string }) {
  const { basePath } = useRouter(); // e.g. "/c"
  return (
    <Image
      src={`${basePath}/judo.jpg`}      // served from client/public/judo.jpg
      alt={alt}
      width={size}
      height={size}
      priority
    />
  );
}
