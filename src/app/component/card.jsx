import CostumToolTip from "@/lib/ui/hover";
import Image from "next/image";
import Link from "next/link";
import ToolTip from "./tooltip";
import MotionDiv from "./framer/motion-div";

function AnimeCard({img, api}) {
  let flag = api?.attributes?.originalLanguage === 'ja' ? 'jp' : api?.attributes?.originalLanguage === 'ko' ? 'kr' : api?.attributes?.originalLanguage === 'zh' ? 'cn' : api?.attributes?.originalLanguage === 'en'? 'gb' : api?.attributes?.originalLanguage;
  return (
    <CostumToolTip content={<ToolTip animeId={api?.id}/>} >
       <MotionDiv
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          variants={{
            hidden  : { opacity: 0, y: 20 },
            visible : { opacity: 1, y: 0 },
          }}
        >
      <Link
        href={`/manga/${api.id}`}
        className="nime-card group"
        style={{ width: "200px", height: "300px" }}
      >
        <div
          className=" drop-shadow-lg absolute z-20 m-2"
          style={{ width: "25px", height: "20px" }}
        >
          <Image
            className=" rounded-md "
            alt="flag"
            width={25}
            height={20}
            src={`https://mangadex.org/img/flags/${flag}.svg`}
          />
        </div>
        <div className="font-bold titles line-clamp-5 group-hover:my-1 transition-all ">
          {api?.attributes?.title.en}
        </div>
        <div className=" transition-all translate-y-full bg-gradient-to-t from-[black] to-transparent inset-0 absolute z-20 group-hover:-translate-y-0"></div>
        <div
          className="flex items-start relative mb-auto select-none aspect cover"
          style={{ width: "200px", height: "300px" }}
        >
          <Image
            width={200}
            alt="..."
            placeholder="blur"
            blurDataURL="https://media.discordapp.net/attachments/880509666482860042/1250459080334508132/FB_IMG_1718203172483.jpg?ex=666b0445&is=6669b2c5&hm=79184f70c8e68a2fc20bafecedba2a418ecba07ba7640b8a8d202da6b6466521&=&format=webp&width=670&height=670"
            height={300}
            className="w-[100%] h-[100%] object-cover rounded absolute transition-all group-hover:h-[105%]"
            src={`https://mangadex.org/covers/${api?.id}/${img}.256.jpg`}
          />
        </div>
      </Link>
      </MotionDiv>
    </CostumToolTip>
  );
}
export default AnimeCard;
