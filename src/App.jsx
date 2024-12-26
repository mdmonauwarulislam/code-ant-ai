import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { RepositoryList } from './components/RepositoryList';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import AICodeReview from './components/AICodeReview';
import CloudSecurity from './components/CloudSecurity';
import HowToUse from './components/HowToUse';
import Settings from './components/Settings';
import Login from './components/Login';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <>
      {
        location.pathname === '/' ? (
          <Login setIsLoggedIn={setIsLoggedIn} /> 
        ) : (
          isLoggedIn ? (
            <div className="min-h-screen bg-white">
              <div className="flex">
                <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <Header onMenuToggle={() => setIsSidebarOpen(true)} />
                <main className="flex-1 lg:p-6 max-h-screen overflow-y-auto">
                  <Routes>
                    <Route path="/dashboard" element={<RepositoryList />} />
                    <Route path="/dashboard/ai-code-review" element={<AICodeReview />} />
                    <Route path="/dashboard/cloud-security" element={<CloudSecurity />} />
                    <Route path="/dashboard/how-to-use" element={<HowToUse />} />
                    <Route path="/dashboard/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          ) : (
            <Navigate to="/" />
          )
        )
      }
    </>
  );
}

export default App;
