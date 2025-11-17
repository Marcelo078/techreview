import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "./ui/button";

interface WebStorySlide {
  title: string;
  subtitle?: string;
  image: string;
  text: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface WebStoryProps {
  slides: WebStorySlide[];
  onClose: () => void;
}

const WebStory = ({ slides, onClose }: WebStoryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setProgress(0);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Progress bars */}
      <div className="absolute top-0 left-0 right-0 z-10 flex gap-1 p-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white transition-all duration-300"
              style={{
                width: index < currentSlide ? "100%" : index === currentSlide ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Close button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </Button>

      {/* Story content */}
      <div
        className="relative h-full w-full max-w-[540px] mx-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
          <div className="mt-12">
            <h2 className="text-4xl font-bold mb-2 drop-shadow-lg leading-tight">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className="text-xl font-semibold drop-shadow-lg text-secondary">
                {slide.subtitle}
              </p>
            )}
          </div>

          <div className="mb-8">
            <p className="text-lg leading-relaxed drop-shadow-lg mb-6">
              {slide.text}
            </p>
            {slide.cta && (
              <Button
                variant="gaming"
                size="lg"
                className="w-full"
                asChild
              >
                <a href={slide.cta.link} target="_blank" rel="noopener noreferrer">
                  {slide.cta.text}
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Navigation areas */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer z-20"
          onClick={prevSlide}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer z-20"
          onClick={nextSlide}
        />
      </div>

      {/* Navigation buttons (mobile) */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
        {currentSlide > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="pointer-events-auto bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        )}
        <div className="flex-1" />
        {currentSlide < slides.length - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="pointer-events-auto bg-black/50 text-white hover:bg-black/70"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default WebStory;