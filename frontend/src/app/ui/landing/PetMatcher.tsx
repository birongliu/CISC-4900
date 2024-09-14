import Image from "next/image";
import Arrow from "./components/Arrow";

const images = [
  {
    src: "/dog.png",
    alt: "Happy dog",
  },
  {
    src: "/rabbit.png",
    alt: "Cute rabbit",
  },
  {
    src: "/rat.png",
    alt: "Curious hamster",
  },
  {
    src: "/cat.png",
    alt: "Fluffy cat",
  },
];

export default function PetMatcher() {
  return (
    <div className="my-20 flex items-center px-12 justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary leading-tight">
            Find Out Which Furry Friend Fits You Best!
          </h1>
          <p className="text-primary text-lg font-poppins">
            Take a stroll through our furry family and uncover the ideal
            companion that perfectly matches your lifestyle and personality.
            Whether you&apos;re seeking a playful pal for outdoor adventures or
            a cuddly companion for cozy nights in, our diverse selection of pets
            awaits your discovery.
          </p>
          <button className="flex items-center space-x-2 text-pretty font-semibold hover:underline">
            <span>Explore More </span>
            <Arrow />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image) => {
            return (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
