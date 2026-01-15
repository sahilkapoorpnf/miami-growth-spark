import bitdecentroLogo from '@/assets/bitdecentro-logo.png';
import miamiPetLogo from '@/assets/miami-pet-logo.png';

interface SlideHeaderProps {
  currentSlide: number;
  totalSlides: number;
}

const SlideHeader = ({ currentSlide, totalSlides }: SlideHeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="flex items-center gap-4">
        <img src={bitdecentroLogo} alt="Bitdecentro" className="h-8 md:h-10" />
      </div>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{currentSlide}</span>
        <span>/</span>
        <span>{totalSlides}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <img src={miamiPetLogo} alt="Miami's Pet Grooming" className="h-10 md:h-12" />
      </div>
    </header>
  );
};

export default SlideHeader;
