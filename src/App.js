import './index.css';
// import Todo from './Todo';
import { Routes, Route} from "react-router-dom";

import AllMeetupsPage from './pages/AllMeetups';
import FavouritePage from './pages/Favourite';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';


function App() {
  return (
    <div>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />}></Route>
            <Route path="/favourites" element={<FavouritePage />}></Route>
            <Route path="/new-meetup" element={<NewMeetup />}></Route>
          </Routes>
        </Layout>
     </div>
  );
}
export default App;