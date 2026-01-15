import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the static HTML presentation
    window.location.href = '/presentation.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF5F0] via-[#FFEEE6] to-[#FFE4D9]">
      <div className="text-center">
        <p className="text-lg text-gray-600">Loading presentation...</p>
        <a 
          href="/presentation.html" 
          className="mt-4 inline-block px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
        >
          Open Presentation
        </a>
      </div>
    </div>
  );
};

export default Index;
