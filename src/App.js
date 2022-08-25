import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./Components/Nav";

import User from "./Pages/User";
import Users from "./Pages/Users";
import NewUser from "./Pages/NewUser";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (

    <BrowserRouter>

      <Nav/>
      
      <Routes>

          <Route path="/" element={<Users/>}/>
          <Route path="/:slug" element={<User/>}/>
          <Route path="/New" element={<NewUser/>}/>
          <Route path="*" element={<NotFound/>}/>

      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
