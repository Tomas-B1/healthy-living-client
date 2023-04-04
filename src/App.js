import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp"
import Login from "./Pages/Login/Login";
import Workout from "./Pages/Workout/Workout";
import WorkoutInfo from "./Pages/WorkoutInfo/WorkoutInfo"
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<WorkoutInfo />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
