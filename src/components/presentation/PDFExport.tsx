import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

// Import all slides
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

const slides = [
  { Component: TitleSlide, name: 'Title' },
  { Component: ProblemSlide, name: 'Problem' },
  { Component: SolutionSlide, name: 'Solution' },
  { Component: AuditSlide, name: 'Audit' },
  { Component: PackagesSlide, name: 'Packages' },
  { Component: ActionPlanSlide, name: 'Action Plan' },
  { Component: ResultsSlide, name: 'Results' },
  { Component: WhyUsSlide, name: 'Why Us' },
  { Component: ContactSlide, name: 'Contact' },
];

const PDFExport = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    
    // Create a temporary container for PDF generation
    const container = document.createElement('div');
    container.id = 'pdf-export-container';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.width = '1920px';
    document.body.appendChild(container);

    // Create all slides for PDF
    slides.forEach(({ Component }, index) => {
      const slideWrapper = document.createElement('div');
      slideWrapper.className = 'pdf-slide-wrapper';
      slideWrapper.style.cssText = `
        width: 1920px;
        height: 1080px;
        background: linear-gradient(135deg, #FFF5F0 0%, #FFEEE6 50%, #FFE4D9 100%);
        position: relative;
        overflow: hidden;
        page-break-after: always;
        display: flex;
        flex-direction: column;
      `;

      // Add header
      const header = document.createElement('div');
      header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 48px;
        background: rgba(255, 255, 255, 0.8);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      `;
      header.innerHTML = `
        <img src="${bitdecentroLogo}" alt="Bitdecentro" style="height: 48px;" />
        <span style="font-size: 18px; color: #666;">${index + 1} / ${slides.length}</span>
        <img src="${miamiPetLogo}" alt="Miami's Pet Grooming" style="height: 56px;" />
      `;
      slideWrapper.appendChild(header);

      // Add slide content placeholder
      const content = document.createElement('div');
      content.style.cssText = `
        flex: 1;
        padding: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      `;
      content.id = `pdf-slide-${index}`;
      slideWrapper.appendChild(content);

      container.appendChild(slideWrapper);
    });

    // Wait a moment for rendering
    await new Promise(resolve => setTimeout(resolve, 500));

    // Configure html2pdf options
    const opt = {
      margin: 0,
      filename: 'Miamis-Pet-Grooming-SEO-Proposal.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      },
      jsPDF: { 
        unit: 'px', 
        format: [1920, 1080], 
        orientation: 'landscape',
        hotfixes: ['px_scaling']
      },
      pagebreak: { mode: 'avoid-all' }
    };

    try {
      // Get the actual rendered slides from the DOM
      const mainContainer = document.querySelector('.slide-container');
      if (mainContainer) {
        await html2pdf().set(opt).from(container).save();
      }
    } catch (error) {
      console.error('PDF export failed:', error);
    } finally {
      document.body.removeChild(container);
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-miami-pink text-white hover:bg-miami-pink/90 transition-colors disabled:opacity-50"
      title="Download as PDF"
    >
      {isExporting ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Download className="w-5 h-5" />
      )}
      <span className="hidden md:inline">{isExporting ? 'Exporting...' : 'PDF'}</span>
    </button>
  );
};

export default PDFExport;
