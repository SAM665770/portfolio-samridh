import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs";
import { useWindowStore } from "../store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();

  return (
    <nav>
      {/* Left Section */}
      <div>
        <img src="/images/logo.svg" alt="apple_logo" />
        <p className="font-bold">Samridh's Portfolio</p>

        <ul>
          {navLinks.map(({ name, id, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
