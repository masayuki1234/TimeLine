import "./styles.css";
import { TimeLine } from "./components/Timeline";
import { Bottom } from "./components/Bottom";

export const App = () => {
  return (
    <div className="App">
      <TimeLine />
      <Bottom />
    </div>
  );
};
