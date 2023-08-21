import './index.css';
// import Todo from './Todo';
import { Routes, Route} from "react-router-dom";

import AllMeetupsPage from './pages/AllMeetups';
import FavouritePage from './pages/Favourite';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
        {/* <h1>My Todos</h1>
        <Todo text="Junior"/>
        <Todo text="Midle"/>
        <Todo text="Senior"/> */}
{/* ---------------------React Route--------------------------- */}
{/* <Routes>
   <Route path="/all-meetups"> <AllMeetupsPage /></Route>
</Routes> */}
          <MainNavigation/>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />}></Route>
            <Route path="/favourites" element={<FavouritePage />}></Route>
            <Route path="/new-meetup" element={<NewMeetup />}></Route>
          </Routes>
     </div>
  );
}
export default App;