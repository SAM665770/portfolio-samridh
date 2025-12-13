import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { useWindowStore } from "../store/window";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white h-[80vh] w-[70vw] overflow-hidden">
        {imageUrl ? (
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full max-h-full object-contain rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
