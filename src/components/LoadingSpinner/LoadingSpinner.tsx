import "./LoadingSpinner.css";
import { cyberpunk } from "../../assets/images";
const LoadingSpinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* You can use any loading animation or message here */}
      {/* <div className="spinner"></div> */}
      <div className="bg-transparent">
        <img className="h-20 w-20 animate-spin" src={cyberpunk} alt="" />
        <span className="animate-ping">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
