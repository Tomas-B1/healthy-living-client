import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp"
import Login from "./Pages/Login/Login";
import Workout from "./Pages/Workout/Workout";
import WorkoutInfo from "./Pages/WorkoutInfo/WorkoutInfo"
import UserProfile from "./Pages/UserProfile/UserProfile";
import WorkoutPlans from "./Pages/WorkoutPlans/WorkoutPlans";
import Meals from "./Pages/Meals/Meal"
import MealInfo from "./Pages/MealInfo/MealInfo";
import Monday from "./Pages/Monday/Monday";
import Tuesday from "./Pages/Tuesday/Tuesday";
import Wednesday from "./Pages/Wednesday/Wednesday";
import Thursday from "./Pages/Thursday/Thursday";
import Friday from "./Pages/Friday/Friday";
import Saturday from "./Pages/Saturday/Saturday";
import Sunday from "./Pages/Sunday/Sunday";


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
        <Route path="/workoutplans" element={<WorkoutPlans/>}/>
        <Route path="/meals" element={<Meals/>}/>
        <Route path="/meals/:id" element={<MealInfo/>}/>
        <Route path="/monday" element={<Monday/>}/>
        <Route path="/tuesday" element={<Tuesday/>}/>
        <Route path="/wednesday" element={<Wednesday/>}/>
         <Route path="/thursday" element={<Thursday/>}/>
         <Route path="/friday" element={<Friday/>}/>
         <Route path="/saturday" element={<Saturday/>}/>
         <Route path="/sunday" element={<Sunday/>}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
