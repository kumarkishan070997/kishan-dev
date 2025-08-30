import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ExperienceCounter() {
  const { ref, isVisible } = useIntersectionObserver();
  const [experience, setExperience] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    if (isVisible) {
      const startDate = new Date('2020-03-01');
      const currentDate = new Date();
      
      const years = currentDate.getFullYear() - startDate.getFullYear();
      const months = currentDate.getMonth() - startDate.getMonth();
      const days = currentDate.getDate() - startDate.getDate();
      
      let totalYears = years;
      let totalMonths = months;
      let totalDays = days;
      
      // Adjust for negative days
      if (totalDays < 0) {
        totalMonths -= 1;
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        totalDays += lastMonth.getDate();
      }
      
      // Adjust for negative months
      if (totalMonths < 0) {
        totalYears -= 1;
        totalMonths += 12;
      }

      // Animate the counters
      let currentYears = 0;
      let currentMonths = 0;
      let currentDays = 0;

      const yearInterval = setInterval(() => {
        if (currentYears < totalYears) {
          currentYears++;
          setExperience(prev => ({ ...prev, years: currentYears }));
        } else {
          clearInterval(yearInterval);
        }
      }, 50);

      const monthInterval = setInterval(() => {
        if (currentMonths < totalMonths) {
          currentMonths++;
          setExperience(prev => ({ ...prev, months: currentMonths }));
        } else {
          clearInterval(monthInterval);
        }
      }, 100);

      const dayInterval = setInterval(() => {
        if (currentDays < totalDays) {
          currentDays++;
          setExperience(prev => ({ ...prev, days: currentDays }));
        } else {
          clearInterval(dayInterval);
        }
      }, 20);

      return () => {
        clearInterval(yearInterval);
        clearInterval(monthInterval);
        clearInterval(dayInterval);
      };
    }
  }, [isVisible]);

  return (
    <div className="bg-card border border-border rounded-lg p-8 hover-glow">
      <h3
        ref={ref}
        className="text-xl font-semibold text-secondary mb-6 font-mono terminal-prompt"
        data-testid="experience-counter-title"
      >
        total_experience()
      </h3>
      
      <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center">
        <div className="space-y-2" data-testid="years-counter">
          <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">
            {String(experience.years).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground font-mono">Years</div>
        </div>
        
        <div className="space-y-2" data-testid="months-counter">
          <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">
            {String(experience.months).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground font-mono">Months</div>
        </div>
        
        <div className="space-y-2" data-testid="days-counter">
          <div className="text-2xl sm:text-3xl font-bold text-primary font-mono">
            {String(experience.days).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground font-mono">Days</div>
        </div>
      </div>
      
      
    </div>
  );
}