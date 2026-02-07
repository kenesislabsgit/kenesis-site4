"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ReactLenis } from "lenis/react";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid/BentoGrid";

import "./product.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProductPage = () => {
  const container = useRef();

  // Keyboard navigation support for grid
  useEffect(() => {
    const handleKeyDown = (e) => {
      const focusedElement = document.activeElement;
      const useCaseCards = document.querySelectorAll('.use-case-card');
      const currentIndex = Array.from(useCaseCards).indexOf(focusedElement);
      
      if (currentIndex === -1) return;
      
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = Math.min(currentIndex + 1, useCaseCards.length - 1);
          useCaseCards[nextIndex].focus();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = Math.max(currentIndex - 1, 0);
          useCaseCards[prevIndex].focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          const downIndex = Math.min(currentIndex + 2, useCaseCards.length - 1);
          useCaseCards[downIndex].focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const upIndex = Math.max(currentIndex - 2, 0);
          useCaseCards[upIndex].focus();
          break;
        case 'Home':
          e.preventDefault();
          useCaseCards[0].focus();
          break;
        case 'End':
          e.preventDefault();
          useCaseCards[useCaseCards.length - 1].focus();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Controls parallax effects on scroll
  useGSAP(
    () => {
      // Hero image parallax
      ScrollTrigger.create({
        trigger: ".product-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const yMove = -50 * self.progress;
          gsap.set(".product-hero-img img", {
            y: yMove,
          });
        },
      });

      // Feature images parallax for bento grid
      const bentoItems = gsap.utils.toArray(".bento-item");
      bentoItems.forEach((item) => {
        const img = item.querySelector(".feature-img img");
        if (img) {
          ScrollTrigger.create({
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              const yMove = -30 * self.progress;
              gsap.set(img, {
                y: yMove,
              });
            },
          });
        }
      });

      // Simple grid animations for use cases
      const useCaseCards = gsap.utils.toArray(".use-case-card");
      
      useCaseCards.forEach((card, i) => {
        gsap.set(card, { opacity: 0, y: 50 });
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          end: "top 50%",
          scrub: 1,
          onUpdate: (self) => {
            const opacity = self.progress;
            gsap.set(card, {
              opacity: opacity,
              y: 50 * (1 - opacity),
            });
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="product" ref={container}>
        <section className="product-hero">
          <div className="product-hero-img">
            <img src="/images/product/visionhero.webp" alt="Kenesis Vision Glasses" />
            <div className="hero-img-overlay"></div>
            <div className="hero-img-gradient"></div>
          </div>
          <div className="container">
            <div className="product-hero-content">
              <ShuffleText
                as="h1"
                text="VISION"
              />
              <h2>Smart Glasses That See What You Mean</h2>
              <p className="hero-subtitle">
                AI-powered contextual awareness, right from your eyes — a wearable assistant designed to understand your world and help you navigate it smarter.
              </p>
              <div className="hero-cta">
                <Link href="/coming-soon" className="cta-primary">
                  Join Waitlist
                </Link>
                <Link href="#specs" className="cta-secondary">
                  See Specs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="product-why">
          <div className="container">
            <div className="product-section-header">
              <p className="primary">[ Revolutionary Technology ]</p>
              <ShuffleText
                as="h2"
                text="Why Kenesis Vision?"
                triggerOnScroll={true}
              />
            </div>
            <div className="why-content">
              <div className="why-intro">
                <h3>
                  Kenesis Vision isn't just wearable tech. It's a real-time companion for productivity, safety, and context-aware intelligence — all processed directly on the device.
                </h3>
              </div>
              <BentoGrid>
                <BentoGridItem
                  size="wide"
                  title="Scene Recognition"
                  description="Understand surroundings instantly with advanced computer vision and object detection"
                  header={
                    <div className="feature-img">
                      <img src="/images/product/scene.webp" alt="Scene Recognition" />
                      <div className="hero-img-overlay"></div>
                    </div>
                  }
                />
                <BentoGridItem
                  size="tall"
                  title="Text Detection & Translation"
                  description="Live transcription and multilingual understanding in real-time"
                  header={
                    <div className="feature-img">
                      <img src="/images/product/text.png" alt="Text Detection" />
                      <div className="hero-img-overlay"></div>
                    </div>
                  }
                />
                <BentoGridItem
                  size="default"
                  title="Task-Aware Overlays"
                  description="Step-by-step visual instructions with AR-style guidance"
                  header={
                    <div className="feature-img">
                      <img src="/images/product/task.webp" alt="Task Overlays" />
                      <div className="hero-img-overlay"></div>
                    </div>
                  }
                />
                <BentoGridItem
                  size="default"
                  title="Edge AI Processing"
                  description="Ultra-low latency, private processing that works without cloud connectivity"
                  header={
                    <div className="feature-img">
                      <img src="/images/product/edge.webp" alt="Edge AI" />
                      <div className="hero-img-overlay"></div>
                    </div>
                  }
                />
                <BentoGridItem
                  size="full"
                  title="Voice & Gesture Control"
                  description="Hands-free operation with natural voice commands and intuitive gestures for seamless interaction"
                  header={
                    <div className="feature-img">
                      <img src="/images/product/voice.png" alt="Voice Control" />
                      <div className="hero-img-overlay"></div>
                    </div>
                  }
                />
              </BentoGrid>
              <div className="tech-stack-highlight">
                <p className="secondary">All powered by our Kenesis Vision Stack — optimized models that can run even on mobile.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="product-use-cases" aria-labelledby="use-cases-heading">
          <div className="container">
            <div className="product-section-header">
              <p className="primary" aria-label="Section category">[ Use Cases by User Type ]</p>
              <h2 id="use-cases-heading">Built for Every Professional</h2>
            </div>

            <div className="use-cases-grid">
              {/* Card 1: Professionals & Field Technicians */}
              <article 
                className="use-case-card" 
                tabIndex="0"
                role="article"
                aria-labelledby="professionals-heading"
              >
                <div className="use-case-img">
                  <img 
                    src="/images/product/field.png" 
                    alt="Professional field technician wearing Kenesis Vision smart glasses while working on industrial equipment" 
                  />
                </div>
                <div className="use-case-content">
                  <div className="use-case-category">
                    <span className="use-case-tag" aria-label="Category: Field Work">Field Work</span>
                    <h3 id="professionals-heading">Professionals & Field Technicians</h3>
                  </div>
                  <ul role="list" aria-label="Field work use cases">
                    <li>Live visual debugging & diagnostics</li>
                    <li>Contextual task reminders & notes</li>
                    <li>Hands-free documentation capture</li>
                  </ul>
                </div>
              </article>

              {/* Card 2: Creators & Researchers */}
              <article 
                className="use-case-card" 
                tabIndex="0"
                role="article"
                aria-labelledby="creators-heading"
              >
                <div className="use-case-img">
                  <img 
                    src="/images/product/creative.png" 
                    alt="Content creator wearing Kenesis Vision glasses while journaling and creating media content" 
                  />
                </div>
                <div className="use-case-content">
                  <div className="use-case-category">
                    <span className="use-case-tag" aria-label="Category: Creative">Creative</span>
                    <h3 id="creators-heading">Creators & Researchers</h3>
                  </div>
                  <ul role="list" aria-label="Creative and research use cases">
                    <li>On-the-go content drafting</li>
                    <li>Eye-level journaling & media tagging</li>
                    <li>Context-sensitive script recall</li>
                  </ul>
                </div>
              </article>

              {/* Card 3: Industrial & Warehouse Workers */}
              <article 
                className="use-case-card" 
                tabIndex="0"
                role="article"
                aria-labelledby="industrial-heading"
              >
                <div className="use-case-img">
                  <img 
                    src="/images/product/ware.png" 
                    alt="Industrial worker using Kenesis Vision glasses for safety and workflow management" 
                  />
                </div>
                <div className="use-case-content">
                  <div className="use-case-category">
                    <span className="use-case-tag" aria-label="Category: Industrial">Industrial</span>
                    <h3 id="industrial-heading">Industrial & Warehouse Workers</h3>
                  </div>
                  <ul role="list" aria-label="Industrial and warehouse use cases">
                    <li>Stepwise workflows & checklists</li>
                    <li>Real-time safety alerts (hazard proximity, violations)</li>
                    <li>Quiet, gesture-based ops</li>
                  </ul>
                </div>
              </article>

              {/* Card 4: Universal Accessibility */}
              <article 
                className="use-case-card accessibility-card" 
                tabIndex="0"
                role="article"
                aria-labelledby="everyone-heading"
              >
                <div className="use-case-img">
                  <img 
                    src="/images/product/access.png" 
                    alt="Diverse users with different accessibility needs using Kenesis Vision glasses" 
                  />
                </div>
                <div className="use-case-content">
                  <div className="use-case-category">
                    <span className="use-case-tag" aria-label="Category: Universal Accessibility">Accessibility</span>
                    <h3 id="everyone-heading">Universal Features for Everyone</h3>
                  </div>
                  <ul role="list" aria-label="Universal accessibility and assistance features">
                    <li>Memory assistance & cognitive support</li>
                    <li>Voice commands and audio feedback</li>
                    <li>High contrast & visual accessibility modes</li>
                    <li>Language translation & hearing assistance</li>
                    <li>Navigation support for visual impairments</li>
                  </ul>
                  <div className="accessibility-note">
                    <p>Designed for users with visual, auditory, and cognitive accessibility needs</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="product-specs" id="specs">
          <div className="container">
            <div className="specs-content">
              <div className="specs-col">
                <div className="product-section-header">
                  <p className="primary">[ Built for Real-World Conditions ]</p>
                  <h2>Designed from the Inside Out</h2>
                </div>
                <div className="specs-list">
                  <div className="spec-item">
                    <h4>Local AI Inference</h4>
                    <p>No cloud lag, no data leaks</p>
                  </div>
                  <div className="spec-item">
                    <h4>Battery-optimized</h4>
                    <p>Power-efficient models built for all-day use</p>
                  </div>
                  <div className="spec-item">
                    <h4>Phone Companion App</h4>
                    <p>Seamless sync & logbook of your visual memory</p>
                  </div>
                  <div className="spec-item">
                    <h4>Durable Form</h4>
                    <p>Lightweight, rugged, and discreet</p>
                  </div>
                </div>
              </div>
              <div className="specs-col specs-visual">
                <div className="specs-hero-img">
                  <img src="/images/product/prodmore.jpeg" alt="Kenesis Vision Technical Specifications" />
                  <div className="specs-img-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-product">
          <div className="next-product-bg"></div>
          <div className="marquee-product">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">[ Experience the Future ]</p>
            <div className="next-product-img">
              <img src="/images/product/prodcta.png" alt="Experience Kenesis Vision" />
            </div>
            <h2>Ready to See What's Possible?</h2>
            <p>
              Whether you're fixing machines, translating street signs, or logging your next idea — Kenesis helps you see what really matters.
            </p>
            <div className="final-cta-buttons">
              <Link href="/coming-soon" className="cta-primary">
                Join the Waitlist
              </Link>
              <Link href="/contact" className="cta-secondary">
                Get in Touch
                <MdArrowOutward />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ProductPage; 