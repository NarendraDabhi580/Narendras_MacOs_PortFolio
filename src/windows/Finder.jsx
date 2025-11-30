import { Search } from "lucide-react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";
import { useDispatch, useSelector } from "react-redux";
import { setActiveLocation } from "#RTK/locationSlice";
import { openWindow } from "#RTK/windowSlice";

import clsx from "clsx";
const Finder = () => {
  const dispatch = useDispatch();

  const activeLocation = useSelector((state) => state.locations.activeLocation);

  const openItem = (item) => {
    if(item?.fileType === "pdf") return dispatch(openWindow({windowKey:"resume"}));
    if(item?.kind === "folder") return dispatch(setActiveLocation({location:item}));
    if(["fig", "url"]?.includes(item?.fileType) && item?.href) return window.open(item?.href, "_blank");

     dispatch(openWindow({windowKey:`${item?.fileType}${item?.kind}`, data:item}));
  };

  const renderListItems = (name, items) => (
    <div>
      <h3>{name}</h3>

      <ul>
        {items?.map((item) => (
          <li
            key={item.id}
            onClick={() => dispatch(setActiveLocation({ location: item }))}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4" alt={item?.name} />
            <p className="text-sm font-medium truncate">{item?.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderListItems("Favorite", Object.values(locations))}
          {renderListItems("Work", locations?.work?.children)}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item?.id}
              className={item?.position}
              onClick={() => openItem(item)}
            >
              <img src={item?.icon} alt={item?.name} />
              <p>{item?.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
