import { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";

type Props = {
  addedImages: string[];
  handleAddImagesUrl: (url: string, index: number, hanldeType: string) => void;
};

const AddImages = (props: Props) => {
  const [currentUrlInput, setCurrentUrlInput] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const handleAddImage = () => {
    if (currentUrlInput.trim() === "") {
      setShowWarning(true);
    } else {
      const nextIndex = props.addedImages.length;
      props.handleAddImagesUrl(currentUrlInput, nextIndex, "add");

      setCurrentUrlInput("");
      setShowWarning(false);
    }
  };
  return (
    <>
      <div className="collapse-arrow collapse mt-3 border border-gray-200 transition duration-300 hover:shadow-md">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center justify-between font-bold text-base-content peer-checked:bg-base-200 peer-checked:text-base-content">
          <div className="label-text flex items-center gap-1">
            <span>ເພີ່ມຮູບສິນຄ້າ</span>
            <BiImageAdd size={23} />
          </div>
        </div>
        <div className="collapse-content text-base-content peer-checked:bg-base-200 peer-checked:text-base-content">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                className="input-bordered input input-sm w-full focus:outline-none"
                name="image"
                type="text"
                placeholder="Enter Image URL"
                value={currentUrlInput}
                onChange={(e) => setCurrentUrlInput(e.target.value)}
              />
              <span className="btn-primary btn-sm btn" onClick={handleAddImage}>
                +
              </span>
              <span
                onClick={() => props.handleAddImagesUrl("", 0, "clear")}
                className="btn-error btn-outline btn-sm btn"
              >
                <AiOutlineClear />
              </span>
            </div>
            {showWarning && (
              <p className="text-sm text-error">Please fill up the URL</p>
            )}
            <div>
              <ul className="flex flex-wrap items-center gap-5">
                {props.addedImages.map((imageUrl, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <img
                      className="mask mask-square h-12 w-12"
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                    />
                    <span
                      className="btn-error btn-outline btn-sm btn"
                      onClick={() =>
                        props.handleAddImagesUrl(imageUrl, index, "del")
                      }
                    >
                      -
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImages;
