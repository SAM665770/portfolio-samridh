import { Dock, Navbar, Welcome } from "./components/index.js";
import { Terminal } from "./windows/index.js";

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
    </main>
  );
};

export default App;
