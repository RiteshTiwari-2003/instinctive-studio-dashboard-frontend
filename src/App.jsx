import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/students" element={<MainContent />} />
            <Route path="/profile" element={<MainContent />} />
            <Route path="/courses" element={<MainContent />} />
            <Route path="/assignments" element={<MainContent />} />
            <Route path="/grades" element={<MainContent />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
