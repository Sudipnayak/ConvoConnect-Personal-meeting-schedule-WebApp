import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import MeetingsPlusPlus from './pages/MeetingsPlusPlus';
import NotFound from './pages/NotFound'
import AboutMeetings from './pages/AboutMeetings'
function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Routes>
        <Route path="/" element={<AboutMeetings />} />
        <Route path="/scheduled-meetings" element={<Home />} />
        <Route path="/add-meetings" element={<MeetingsPlusPlus/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
