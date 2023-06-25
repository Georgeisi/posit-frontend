import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import { AuthProvider } from "./components/Context/AuthContext";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";
import Feeds from "./pages/Feeds";
import MyStories from "./pages/MyStories";
import CreateStory from "./pages/CreateStory";
import EditStory from "./pages/EditStory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="feeds" element={<Feeds />} />
              <Route path="my-stories" element={<MyStories />} />
              <Route path="create-story" element={<CreateStory />} />
              {/* <Route path="stories" element={<Stories />} /> */}
              <Route path="edit-story/:id" element={<EditStory />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
