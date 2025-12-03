import { dockApps } from "../constants";
import { Tooltip } from "react-tooltip";
import { useWindowStore } from "../store/window";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    const window = windows[app.id];

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }

    console.log(windows);
  };

  return (
    <section id="dock">
      <div className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <img
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
                className={canOpen ? "" : "opacity-60"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
