import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

const SlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoTo,
}: SlideNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-lg border-t border-border/50">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 1}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
        <span className="hidden md:inline">Previous</span>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i + 1)}
            className={`nav-dot ${currentSlide === i + 1 ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <span className="hidden md:inline">Next</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
};

export default SlideNavigation;
