import LandingPage from './components/LandingPage';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News';
import Personnel from './components/Personnel';
import Contact from './components/Contact';
import Artists from './components/Artists';
import Sidebar from './components/Sidebar';
// import Donations from './components/Donations';
// import Login from './components/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/app">
        <Header />
        <div className="grid-wrapper">
          <Sidebar />
          <div className="main">
            <Routes>
              <Route element={<About />} path="/about" />
              <Route element={<Artists />} path="/artists" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<News />} path="/news" />
              <Route element={<Personnel />} path="personnel" />
              {/* <Route element={<Donations />} path="/donations" />
            <Route element={<Login />} path="/login" /> */}
              <Route element={<LandingPage />} path="/" />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
  // return (
  //   <div>
  //     <LandingPage />
  //     <BasePage />
  //   </div>
  // );
}

export default App;
