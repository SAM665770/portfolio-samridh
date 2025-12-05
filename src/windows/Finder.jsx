import { Search } from "lucide-react";
import { WindowControls } from "../components/index.js";
import WindowWrapper from "../hoc/WindowWrapper";
import { locations } from "../constants";
import { useLocationStore } from "../store/location.js";
import clsx from "clsx";
import { useWindowStore } from "../store/window.js";

const Finder = () => {
  const { setActiveLocation, activeLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");
    if (item.kind === "folder") return setActiveLocation(item);
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    // for opening images and text file
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (items) =>
    items.map((item) => (
      <li
        key={item.id}
        onClick={() => setActiveLocation(item)}
        className={clsx(
          item.id === activeLocation.id ? "active" : "not-active"
        )}
      >
        <img src={item.icon} alt={item.name} className="w-4" />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white h-full flex">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
