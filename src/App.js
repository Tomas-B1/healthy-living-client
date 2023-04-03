import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<WorkoutItem />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
