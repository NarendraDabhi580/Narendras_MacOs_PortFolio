import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { openWindow } from "#RTK/windowSlice";
import { Mail, Search } from "lucide-react";
import { useDispatch } from "react-redux";

const Photos = () => {
  const dispatch = useDispatch();

  const openPhoto = (photo) => {
    dispatch(openWindow({ windowKey: "imgfile", data: photo }));
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks?.map(({ id, icon, title }) => (
              <li key={id}>
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery?.map(({ id, img, name }) => (
              <li
                key={id}
                onClick={() => openPhoto({ id, imageUrl: img, name })}
              >
                <img src={img} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
