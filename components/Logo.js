import Image from "next/image";

const Logo = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={150} height={60} priority />;
};

export default Logo;
