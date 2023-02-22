import { EmblaCarousel, Nav } from "./component";
import logo from "./logo.svg";

function App() {
  const OPTIONS = {};
  const SLIDE_COUNT = 2;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="App">
      <Nav />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default App;
