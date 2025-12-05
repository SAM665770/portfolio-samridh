import { Dock, Navbar, Welcome } from "./components/index.js";
import {
  Contact,
  Finder,
  Image,
  Resume,
  Terminal,
  Text,
} from "./windows/index.js";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;
