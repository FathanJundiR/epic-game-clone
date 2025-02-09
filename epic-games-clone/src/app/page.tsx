import Image from "next/image";
// import bannerMobilAd1 from "../assets/images/banner-mobilAd-1.avif";
// import bannerMobilAd2 from "../assets/images/banner-mobilAd-2.avif";
import FooterComponent from "@/components/FooterComponent";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import { ObjectId } from "mongodb";
import NavbarComponent from "@/components/NavbarComponent";

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  developer: string;
  publisher: string;
  platform: string[];
  genres: string[];
  thumbnail: string;
  logo: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

const fetchProduct = async () => {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const responsejson: Product[] = await response.json();
  console.log(responsejson);
};

export default async function Home() {
  const products = await fetchProduct();
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col items-center">
        <div className="bg-white flex min-h-screen flex-col items-center justify-between mt-10 w-4/5 ">
          <div className="bg-slate-500  flex flex-row gap-4 ">
            <div className="bg-red-500 h-[301px] flex-auto">
              {/* <Image src="#" alt="" /> */}
            </div>
            <div className="bg-blue-500 h-[301px] flex-auto">
              {/* <Image src="#" alt="" /> */}
            </div>
          </div>
          <div className="bg-yellow-500  flex flex-row gap-4  h-[590px]">
            <div className="bg-red-500 h-[301px] w-4/5">
              {/* <Image src="#" alt="" /> */}
            </div>
            <div className="bg-blue-500 h-[301px] w-1/5">
              {/* <Image src="#" alt="" /> */}
            </div>
          </div>
          <div className="bg-slate-500  flex flex-col gap-4 w-full h-[500px]">
            <div className="bg-red-500 w-full flex flex-row">
              <div className="flex flex-row flex-grow justify-start gap-2">
                <div className="bg-blue-400">Featured Discounts</div>
                <div className="bg-blue-600 transition ease-in-out hover:translate-x-1">
                  D
                </div>
              </div>
              <div className="flex flex-row flex-grow justify-end gap-2">
                <div className="bg-blue-400">kanan2</div>
                <div className="bg-blue-600">kanan6</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div></div>
              <div className="bg-red-700">HALLLOO</div>
              <div className="bg-red-500">HALLLOO</div>
              <div className="bg-red-700">HALLLOO</div>
              <div className="bg-red-500">HALLLOO</div>
              <div className="bg-red-700">HALLLOO</div>
              <div className="bg-red-500">HALLLOO</div>
            </div>
          </div>
        </div>
        <FooterComponent></FooterComponent>
      </div>
    </>
  );
}
