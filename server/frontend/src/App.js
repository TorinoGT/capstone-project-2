import LoginPanel from "./components/Login/Login";
import SubmitPanel from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers.jsx';
import Dealer from "./components/Dealers/Dealer";
import { Routes, Route } from "react-router-dom";
import PostReview from "./components/Dealers/PostReview";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<SubmitPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
    </Routes>
  );
}
export default App;
