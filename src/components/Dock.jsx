import { dockApps } from "../constants";
import { Tooltip } from 'react-tooltip'
import { useRef } from 'react';

const Dock = () => {
    // const dockRef = useRef(null);
    
    const toggleApp = (app)=> {
      // TODO - Open window login
    }

    // const handleIconHover = (e) => {
    //   e.currentTarget.style.transform = 'scale(1.3) translateY(-8px)';
    // };

    // const handleIconLeave = (e) => {
    //   e.currentTarget.style.transform = 'scale(1) translateY(0)';
    // };


  return (
    <section id="dock">
      <div className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
              // onMouseEnter={handleIconHover}
              // onMouseLeave={handleIconLeave}
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
