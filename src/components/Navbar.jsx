import { navIcons, navLinks } from "../constants";
import dayjs from "dayjs"

const Navbar = () => {
  return (
    <nav>
      {/* Left Section */}
      <div>
        <img src="/images/logo.svg" alt="apple_logo" />
        <p className="font-bold">Samridh's Portfolio</p>

        <ul>
          {navLinks.map(({ name, id }) => (
            <li key={id}>
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
