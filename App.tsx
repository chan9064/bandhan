import React from 'react';
import SchemeCard from './components/SchemeCard';
import { ShieldCheckIcon, HeartHandshakeIcon } from './components/Icons';
import { AppIcon } from './components/AppIcon';
import { PMSBY_URL, PMJJBY_URL } from './constants';
import AdBanner from './components/AdBanner';

const App: React.FC = () => {
  return (
    <main className="bg-gray-800 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-sm h-[85vh] max-h-[700px] bg-gray-50 rounded-3xl shadow-2xl border-4 border-gray-700 flex flex-col overflow-hidden">
        {/* App Header */}
        <header className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 flex items-center space-x-3 shadow-md z-10">
          <div className="bg-white p-1 rounded-full shadow-md">
            <AppIcon className="w-9 h-9" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide">Bandhan Insurance</h1>
        </header>

        {/* Main Content */}
        <div className="flex-grow p-6 flex flex-col items-center justify-center bg-gray-100 overflow-y-auto animate-slide-in-fade">
           <p className="text-center text-gray-600 mb-8 text-lg">
            Select an insurance scheme to proceed.
          </p>
          <div className="w-full grid grid-cols-2 gap-5">
            <SchemeCard
              title="PMSBY"
              url={PMSBY_URL}
              icon={<ShieldCheckIcon className="w-16 h-16 text-cyan-500 group-hover:text-white transition-colors duration-300" />}
              description="Accidental Insurance Scheme"
              color="cyan"
            />
            <SchemeCard
              title="PMJJBY"
              url={PMJJBY_URL}
              icon={<HeartHandshakeIcon className="w-16 h-16 text-blue-600 group-hover:text-white transition-colors duration-300" />}
              description="Life Insurance Scheme"
              color="blue"
            />
          </div>
        </div>

        {/* Ad Banner */}
        <AdBanner />

        {/* Footer */}
        <footer className="text-center p-4 text-xs text-gray-400 border-t border-gray-200">
          © {new Date().getFullYear()} Bandhan. All rights reserved.
        </footer>
      </div>
    </main>
  );
};

export default App;