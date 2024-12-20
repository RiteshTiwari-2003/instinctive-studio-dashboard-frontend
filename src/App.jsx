import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import TestApi from './components/TestApi';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/students" element={<MainContent />} />
          <Route path="/test" element={<TestApi />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
