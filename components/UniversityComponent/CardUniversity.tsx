import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";
import { MapPin } from "lucide-react";

type props = {
  kh_name: string;
  en_name: string;
  location: string;
  popular_major: string;
  logo_url: string;
  onClick?: () => void;
};

export default function CardUniversity({
  kh_name,
  en_name,
  location,
  popular_major,
  logo_url,
  onClick,
}: props) {
  return (

      <div>
        <div className={`flex lg:p-6 md:p-6 p-2 h-50 w-full flex-row items-center bg-white border border-gray-100 shadow-sm rounded-2xl  md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 `} onClick={onClick}>
          <Image
            className="object-cover lg:w-40 lg:h-40 md:w-40 md:h-40 w-24 h-24 mr-2 rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={`http://136.228.158.126:3300/${logo_url}`}
            alt={kh_name}
            width={200}
            height={200}
            unoptimized // Disables Next.js image optimization
          />
          <div className="flex flex-col justify-between w-full lg:p-2 md:p-2 p-0 leading-normal">
            <h1 className="lg:mb-2 md:mbb-2 mb-1 text-lg md:text-2xl lg:text-2xl  font-bold tracking-tight text-textprimary dark:text-white">
              {kh_name}
            </h1>
            <h2 className="lg:mb-2 md:mbb-2 mb-1 text-sm md:text-xl lg:text-xl  text-gray-600">
              {en_name}
            </h2>
            <div className="flex space-x-2">
              <MapPin className="w-5 h-5 text-emerald-500 mt-1" />
              <p className="lg:mb-2 md:mbb-2 mb-1 text-sm md:text-lg lg:text-lg font-normal text-gray-600 dark:text-gray-400">
                {location}
              </p>
            </div>
            <div className="lg:mb-2 md:mbb-2 mb-2 text-sm md:text-lg block md:hidden lg:hidden  lg:text-lg text-textprimary">
              ជំនាញពេញនិយម ៖
              <span className="text-sm md:text-lg lg:text-lg text-secondary">
                {popular_major}
              </span>
            </div>
            <div className="flex justify-between items-center ">
              <div className="text-sm md:text-lg hidden md:flex lg:flex lg:text-lg text-textprimary">
                ជំនាញពេញនិយម ៖
                <span className="text-sm md:text-lg lg:text-lg ml-2 text-secondary">
                  {popular_major}
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-sm md:text-lg lg:text-lg text-primary ">
                  ព័ត៌មានផ្សេងៗ
                </div>
                <div>
                  <BiRightArrowAlt className="text-sm md:text-2xl lg:text-2xl ml-2 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
