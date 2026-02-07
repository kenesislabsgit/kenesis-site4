import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  initRoutineSlider();
  initTeamCards();
});

// routine section - slider scroll animation with progress bar
function initRoutineSlider() {
  const sliderWrapper = document.querySelector(".routine-slider-wrapper");
  const progressBar = document.querySelector(".routine-progress");
  if (!sliderWrapper || !progressBar) return;

  const sliderContainer = sliderWrapper.parentElement;

  function calculateMaxTranslate() {
    const containerWidth = sliderContainer.offsetWidth;
    const wrapperWidth = sliderWrapper.offsetWidth;
    return -(wrapperWidth - containerWidth);
  }

  ScrollTrigger.create({
    trigger: ".routine",
    start: "top top",
    end: `+=${window.innerHeight * 5}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const maxTranslateX = calculateMaxTranslate();

      gsap.set(sliderWrapper, { x: progress * maxTranslateX });
      gsap.set(progressBar, { scaleX: progress });
    },
  });
}

// team section - cards arc animation and counter
function initTeamCards() {
  const stickySection = document.querySelector(".team");
  const cards = document.querySelectorAll(".card");
  const countContainer = document.querySelector(".count-container");
  if (!stickySection || !cards.length || !countContainer) return;

  // Reduced scroll height for faster exit after last card
  const stickyHeight = window.innerHeight * 3;
  const totalCards = cards.length;

  function getRadius() {
    return window.innerWidth < 900
      ? window.innerWidth * 7.5
      : window.innerWidth * 2.5;
  }

  const arcAngle = Math.PI * 0.4;
  const startAngle = Math.PI / 2 - arcAngle / 2;

  function getLayoutSettings() {
    const isMobile = window.innerWidth < 900;
    return {
      // Adjusted spacing to prevent "crumbling" (overlap)
      // Mobile card width ~280px. Radius ~7.5*W.
      // 0.12 ensures separation without large gaps.
      cardSpacing: isMobile ? 0.12 : 0.15,
      // Start exactly at center (0.5) on mobile to show first person
      targetStartPos: isMobile ? 0.5 : 0.55,
      // End at center (0.5) to show last person
      targetEndArcProgress: 0.5,
    };
  }

  function positionCards(progress = 0) {
    const radius = getRadius();
    const { cardSpacing, targetStartPos, targetEndArcProgress } = getLayoutSettings();

    const firstCardOffset = (totalCards - 1) * cardSpacing;
    const initialOffset = targetStartPos - firstCardOffset;
    const totalTravel = targetEndArcProgress - initialOffset;

    const arcProgress = initialOffset + progress * totalTravel;

    cards.forEach((card, i) => {
      // cardOffset: 0 for last card, increasing for earlier cards
      const cardOffset = (totalCards - 1 - i) * cardSpacing;
      const cardProgress = cardOffset + arcProgress;
      const angle = startAngle + arcAngle * cardProgress;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

      gsap.set(card, {
        x: x,
        y: -y + radius,
        rotation: -rotation,
        transformOrigin: "center center",
      });
    });
  }

  function updateTeamCounter(progress) {
    const { cardSpacing, targetStartPos, targetEndArcProgress } = getLayoutSettings();
    const firstCardOffset = (totalCards - 1) * cardSpacing;
    const initialOffset = targetStartPos - firstCardOffset;
    const totalTravel = targetEndArcProgress - initialOffset;

    const arcProgress = initialOffset + progress * totalTravel;

    // Calculate which card is currently closest to the center (0.5)
    // Formula derived from: (totalCards - 1 - i) * cardSpacing + arcProgress = 0.5
    let floatIndex = (totalCards - 1) - (0.5 - arcProgress) / cardSpacing;

    // Clamp to valid range (0 to totalCards-1)
    let index = Math.round(floatIndex);

    // Ensure index doesn't jump due to float precision at limits or slightly off start/end
    if (progress <= 0.01) index = 0;
    if (progress >= 0.99) index = totalCards - 1;

    index = Math.max(0, Math.min(totalCards - 1, index));

    // Check strict mobile breakpoint for height calculation, matching CSS @media (max-width: 1000px)
    const isMobile = window.innerWidth <= 1000;
    // On mobile, .count height is 80px. On desktop, 150px.
    const currentItemHeight = isMobile ? 80 : 150;

    const targetY = -index * currentItemHeight;

    gsap.to(countContainer, {
      y: targetY,
      duration: 0.3,
      ease: "power1.out",
      overwrite: true,
    });
  }

  positionCards(0);
  updateTeamCounter(0);

  ScrollTrigger.create({
    trigger: stickySection,
    start: "top top",
    end: `+=${stickyHeight}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1, // Smooth out the animation steps
    anticipatePin: 1,
    preventOverlaps: true, // Help with spacing issues
    onUpdate: (self) => {
      positionCards(self.progress);
      updateTeamCounter(self.progress);
    },
  });

  window.addEventListener("resize", () => {
    positionCards(0);
    updateTeamCounter(0);
  });
}
