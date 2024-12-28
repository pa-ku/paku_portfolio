import { useLang } from "../../context/LangContext";
import esSvg from "../../assets/svg/es_flag.svg";
import engSvg from "../../assets/svg/eng_flag.svg";

export default function LangButton() {
  const { spanish, setSpanish } = useLang();

  return (
    <div className="relative group animate-icons flex text-sm   items-center overflow-x-clip justify-center">
      <button
        className={`${
          spanish ? "translate-x-0" : " translate-x-24"
        } gap-2 flex  items-center justify-center  duration-300`}
        onClick={() => setSpanish(false)}
      >
        <img
          className="size-5 object-cover rounded-full"
          src={esSvg}
          alt="Argentina flag"
        />
        Spanish
      </button>
      <button
        onClick={() => setSpanish(true)}
        className={`flex gap-2 items-center justify-center absolute duration-300 ${
          spanish ? "translate-x-24" : "translate-x-0"
        }`}
      >
        <img
          className="rounded-full size-5 object-cover"
          src={engSvg}
          alt="Eeuu flag"
        />
        English
      </button>
      <p className="absolute  group-hover:opacity-100 opacity-0 pointer-events-none duration-300 px-2 rounded-lg -bottom-8 shadow-lg dark:shadow-background-600 ">
        {spanish ? "Idioma" : "Language"}
      </p>
    </div>
  );
}
