import Image from "next/image";

export default function LCCLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
        <Image 
            src="/LCC-logo.png"
            width={100}
            height={100}
            alt='LCC logo'
        />
    </div>
  );
}