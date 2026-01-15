import { useState, useCallback, useEffect } from 'react';
import SlideHeader from '@/components/presentation/SlideHeader';
import SlideNavigation from '@/components/presentation/SlideNavigation';
import TitleSlide from '@/components/presentation/slides/TitleSlide';
import ProblemSlide from '@/components/presentation/slides/ProblemSlide';
import SolutionSlide from '@/components/presentation/slides/SolutionSlide';
import AuditSlide from '@/components/presentation/slides/AuditSlide';
import PackagesSlide from '@/components/presentation/slides/PackagesSlide';
import ActionPlanSlide from '@/components/presentation/slides/ActionPlanSlide';
import ResultsSlide from '@/components/presentation/slides/ResultsSlide';
import WhyUsSlide from '@/components/presentation/slides/WhyUsSlide';
import ContactSlide from '@/components/presentation/slides/ContactSlide';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
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

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = slides.length;

  const goToSlide = useCallback((slide: number) => {
    if (slide >= 1 && slide <= totalSlides) {
      setCurrentSlide(slide);
    }
  }, [totalSlides]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  const CurrentSlideComponent = slides[currentSlide - 1];

  return (
    <div className="slide-container">
      <SlideHeader currentSlide={currentSlide} totalSlides={totalSlides} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex-1 pt-20 pb-20"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoTo={goToSlide}
      />
    </div>
  );
};

export default Index;
