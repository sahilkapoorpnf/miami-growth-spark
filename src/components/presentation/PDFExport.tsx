import { useState } from 'react';
import { Download, Loader2, Printer } from 'lucide-react';
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import SolutionSlide from './slides/SolutionSlide';
import AuditSlide from './slides/AuditSlide';
import PackagesSlide from './slides/PackagesSlide';
import ActionPlanSlide from './slides/ActionPlanSlide';
import ResultsSlide from './slides/ResultsSlide';
import WhyUsSlide from './slides/WhyUsSlide';
import ContactSlide from './slides/ContactSlide';
import bitdecentroLogo from '@/assets/bitdecentro-logo.png';
import miamiPetLogo from '@/assets/miami-pet-logo.png';

const slideComponents = [
  TitleSlide,
  ProblemSlide,
  SolutionSlide,
  AuditSlide,
  PackagesSlide,
  ActionPlanSlide,
  ResultsSlide,
  WhyUsSlide,
  ContactSlide,
];

const PDFExport = () => {
  const [showPrintView, setShowPrintView] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);

  const handlePrint = async () => {
    setIsPreparing(true);
    setShowPrintView(true);
    
    // Wait for components to render
    await new Promise(resolve => setTimeout(resolve, 500));
    
    window.print();
    
    // Hide print view after printing
    setTimeout(() => {
      setShowPrintView(false);
      setIsPreparing(false);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={handlePrint}
        disabled={isPreparing}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-miami-pink text-white hover:bg-miami-pink/90 transition-colors print:hidden disabled:opacity-50"
        title="Print / Save as PDF"
      >
        {isPreparing ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Printer className="w-5 h-5" />
        )}
        <span className="hidden md:inline">{isPreparing ? 'Preparing...' : 'PDF'}</span>
      </button>

      {/* Print-only view with all slides */}
      {showPrintView && (
        <div className="print-slides-container fixed inset-0 z-[9999] bg-white hidden print:block">
          {slideComponents.map((SlideComponent, index) => (
            <div key={index} className="print-slide">
              <div className="print-slide-header">
                <img src={bitdecentroLogo} alt="Bitdecentro" className="h-8" />
                <span className="text-sm text-gray-600 font-medium">
                  {index + 1} / {slideComponents.length}
                </span>
                <img src={miamiPetLogo} alt="Miami's Pet Grooming" className="h-10" />
              </div>
              <div className="print-slide-content">
                <SlideComponent />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PDFExport;
