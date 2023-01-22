import LoginView from "./views/LoginView";
import NavigationBar from './components/NavigationBar';
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";
import AuthenticatedView from "./views/AuthenticatedView";
import { Route, Routes } from "react-router-dom";
import Applications from "./view_components/Applications";
import NewApplication from "./view_components/NewApplication";
import GenHub from "./view_components/GenHub";


function App() {
  const {currentUser} = useContext(UserContext);

  return (
    <div className="container mx-auto h-screen w-screen">
      <div className="mb-10 w-full">
        <NavigationBar />
      </div>
      <div className="my-auto p-3 h-5/6 w-full">
      <Routes>
        <Route path="/" element={(currentUser)?<AuthenticatedView /> : <LoginView />} >
          <Route path="applications" element={<Applications />} />
          <Route path="new_application" element={<NewApplication />} />
          <Route path="genhub" element={<GenHub />} />
        </Route>
      </Routes>
      {/* {
        (!currentUser)?
        <LoginView /> :
        <AuthenticatedView />
      } */}
      </div>
      <div className="container relative bottom-0">
        <footer className="text-center text-xs">
          <p>© Nennii Cally-Ntete 2022 | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
