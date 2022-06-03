import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritePage from "./pages/Favorite";
import Layout from "./components/layouts/Layout";


function App() {
  return (
   
    <Layout>
   
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/newmeetups" element={<NewMeetupsPage />} />
          <Route path="favorites" element={<FavoritePage />} />
        </Routes>
</Layout>
        
  
    
  );
}

export default App;
