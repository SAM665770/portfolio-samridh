import { WindowControls } from "../components/index.js";
import { socials } from "../constants/index.js";
import WindowWrapper from "../hoc/WindowWrapper.jsx";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="images/adrian.jpg"
          alt="Samridh"
          className="w-20 rounded-full"
        />

        <h3>Let's connect.</h3>
        <p>Got an idea? A bug to squash? Or just wanna tech? I'm in.</p>

        <p className="font-semibold">
          Email:
          <span />{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&to=psamridh007@gmail.com"
            target="_blank"
            className="font-normal text-blue-500 hover:underline"
          >
            psamridh007@gmail.com
          </a>
        </p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
