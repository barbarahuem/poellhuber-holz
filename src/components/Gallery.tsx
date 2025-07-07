import Image, { StaticImageData } from "next/image";

export default function Gallery({imageList, title = "Bilder"} : {imageList: StaticImageData[], title?: string}) {
    return (
      <div className="flex flex-col gap-5">
              <h2>{title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {imageList.map((img, index) => (
                  <Image
                    src={img}
                    key={index}
                    alt={`Pöllhuber ${img}`}
                    width={1000}
                    height={400}
                    className="rounded-2xl mx-auto w-full max-w-5xl h-[200px] object-cover"
                  />
                ))}
              </div>
        </div>
    );
  }