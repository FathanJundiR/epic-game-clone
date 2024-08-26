import Image from "next/image";
import bannerMobilAd1 from "../assets/images/banner-mobilAd-1.avif";
import bannerMobilAd2 from "../assets/images/banner-mobilAd-2.avif";

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen flex-col items-center justify-between mt-10">
      <div className="bg-slate-500  flex flex-row gap-4  w-4/5">
        <div className="bg-red-500 h-[301px] flex-auto">
          <Image src={bannerMobilAd1} alt="" />
        </div>
        <div className="bg-blue-500 h-[301px] flex-auto">
          <Image src={bannerMobilAd1} alt="" />
        </div>
      </div>
      <div className="bg-yellow-500  flex flex-row gap-4  w-4/5 h-[590px]">
        <div className="bg-red-500 h-[301px] w-4/5">
          <Image src={bannerMobilAd1} alt="" />
        </div>
        <div className="bg-blue-500 h-[301px] w-1/5">
          <Image src={bannerMobilAd1} alt="" />
        </div>
      </div>
      <div className="bg-slate-500  flex flex-row gap-4  w-4/5 h-[500px]">
        <div className="bg-red-500 h-[301px] w-4/5">
          <Image src={bannerMobilAd1} alt="" />
        </div>
        <div className="bg-blue-500 h-[301px] w-1/5">
          <Image src={bannerMobilAd1} alt="" />
        </div>
      </div>
    </div>
  );
}
