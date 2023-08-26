import { cyberpunk, cyberpunktext } from "../../assets/images";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img className="w-[3rem] h-auto object-cover" src={cyberpunk} alt="" />
      <img className="w-[7rem] h-auto" src={cyberpunktext} alt="" />
    </div>
  );
};

export default Logo;
