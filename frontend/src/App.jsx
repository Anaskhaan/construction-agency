import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetQuote from "./pages/GetQuote";
import ExistingConditions from "./pages/trades/ExistingsConditions";
import { Toaster } from "react-hot-toast";
import MEP from "./pages/services/MEP";
import ConcreteEstimating from "./pages/trades/ConcreteEstimating";
import Masonary from "./pages/trades/Masonary";
import Metals from "./pages/trades/Metals";
import Home from "./components/HOMESECTIONS/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="getquote" element={<GetQuote />} />
            <Route path="existingconditions" element={<ExistingConditions />} />
            <Route path="concrete" element={<ConcreteEstimating />} />
            <Route path="masonary" element={<Masonary />} />
            <Route path="mep" element={<MEP />} />
            <Route path="metals" element={<Metals />} />
          </Route>
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
