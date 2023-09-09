import { cyberpunk, cyberpunktext } from "../../assets/images";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="h-auto w-[2rem] object-cover sm:w-[3rem]"
        src={cyberpunk}
        alt=""
      />
      <img className="h-auto w-[6rem] sm:w-[7rem]" src={cyberpunktext} alt="" />
    </div>
  );
};

export default Logo;
