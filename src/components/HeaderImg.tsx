import Image from "next/image";

export default function HeaderImg({
  img,
  hasLogo,
  content,
  height,
}: {
  img: { src: string };
  hasLogo: boolean;
  content?: string;
  height: number;
}) {
  return (
    <header
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${img.src})`, height: `${height}vh` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {hasLogo && (
        <Image
          src="/logo-white.png"
          alt="Logo"
          width={400}
          height={100}
          priority
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-1/3 lg:w-1/4"
        />
      )}
      {content && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h3
            className="uppercase"
            style={{ color: "white", fontSize: "1.5rem", textAlign: "center" }}
          >
            {content}
          </h3>
        </div>
      )}
    </header>
  );
}
