"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";
import HighlightedText from "@/components/HighlightedText/HighlightedText";
import GeometricBackground from "@/components/GeometricBackground/GeometricBackground";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid/BentoGrid";
import Badge from "@/components/Badge/Badge";
import { carouselItems } from "./carouselItems";

import "./home.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();

  // initialize Lenis smooth scrolling instance on window
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) {
      window.lenis = lenis;
    }

    return () => {
      window.lenis = null;
    };
  }, [lenis]);

  // controls geometric background animation on scroll
  useGSAP(
    () => {
      const trigger = ScrollTrigger.create({
        trigger: ".intro",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const yMove = -750 * progress;
          const rotation = 360 * progress;

          gsap.to(".geo-bg", {
            y: yMove,
            rotation: rotation,
            duration: 0.1,
            ease: "none",
            overwrite: true,
          });
        },
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: container }
  );

  // Controls pinning of the sticky sections
  useGSAP(
    () => {
      let pinAnimation;

      const initPinning = () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }

        if (window.innerWidth > 900) {
          pinAnimation = ScrollTrigger.create({
            trigger: ".sticky-home",
            start: "top top",
            endTrigger: ".case-studies",
            end: "bottom bottom",
            pin: ".source",
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        }
      };

      initPinning();

      const handleResize = () => {
        initPinning();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: container }
  );

  // Simple parallax scroll effects for case studies
  useGSAP(
    () => {
      const images = gsap.utils.toArray(".case-studies-img");
      const items = gsap.utils.toArray(".case-studies-item");
      
      images.forEach((img, i) => {
        const imgElement = img.querySelector("img");
        const overlay = img.querySelector(".hero-img-overlay");
        
        // Simple parallax and scale effect - sync image and overlay
        ScrollTrigger.create({
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const yMove = -30 * progress;
            const scale = 1 + (0.5 * progress);
            
            // Apply same transform to both image and overlay
            const transform = {
              y: yMove,
              scale: scale,
            };
            
            gsap.set(imgElement, transform);
            if (overlay) {
              gsap.set(overlay, transform);
            }
          },
        });

        // Fade in effect for case study items
        if (items[i]) {
          ScrollTrigger.create({
            trigger: items[i],
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            onUpdate: (self) => {
              const opacity = self.progress;
              gsap.set(items[i], {
                opacity: 0.3 + (0.7 * opacity),
                y: 50 * (1 - opacity),
              });
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger && (trigger.trigger.closest('.case-studies-img') || trigger.trigger.closest('.case-studies-item'))) {
            trigger.kill();
          }
        });
      };
    },
    { scope: container }
  );

  // Simple carousel with smooth transitions
  useGSAP(
    () => {
      const projects = gsap.utils.toArray(".project");
      
      projects.forEach((project, index) => {
        // Fade and slide effects for each project
        ScrollTrigger.create({
          trigger: project,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const opacity = progress < 0.2 ? progress * 5 : progress > 0.8 ? (1 - progress) * 5 : 1;
            const scale = 0.8 + (0.2 * progress);
            const yMove = 100 * (1 - progress);
            
            gsap.set(project, {
              opacity: Math.max(0, Math.min(1, opacity)),
              scale: scale,
              y: yMove,
            });
          },
        });

        // Background parallax - sync image, overlay, and gradient
        const bg = project.querySelector('.project-bg img');
        const overlay = project.querySelector('.project-bg .hero-img-overlay');
        const gradient = project.querySelector('.project-bg .hero-img-gradient');
        
        if (bg) {
          ScrollTrigger.create({
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              const yMove = -50 * self.progress;
              const transform = { y: yMove };
              
              // Apply same transform to background image and its overlays
              gsap.set(bg, transform);
              if (overlay) {
                gsap.set(overlay, transform);
              }
              if (gradient) {
                gsap.set(gradient, transform);
              }
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger && trigger.trigger.closest('.project')) {
            trigger.kill();
          }
        });
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      }}
    >
      <div className="app" ref={container}>
        <section className="hero">
          <div className="hero-img">
            <img src="/images/home/home2.webp" alt="" />
          </div>
          <div className="hero-img-overlay"></div>
          <div className="hero-img-gradient"></div>
          <div className="container">
            <div className="hero-copy">
              <div className="hero-copy-col">
                <ShuffleText as="h3" text="A revolutionary leap into" />
                <HighlightedText as="h1" text="Smart Vision Technology" highlightedWords={["Vision"]} />
              </div>
              <div className="hero-copy-col">
                <div className="hero-icon">
                  <img src="/images/home/kenlogo.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-showcase partners-showcase" id="partners" aria-label="We are backed by">
          <div className="container">
            <HighlightedText
              as="h2"
              text="We are backed by"
              highlightedWords={["backed"]}
            />
          </div>
          <div className="products-header"></div>
          <div className="container">
            <div className="partners-logos" role="list">
              <div className="partner-item" role="listitem">
                <a href="https://rajalakshmi.org/" target="_blank" rel="noopener noreferrer" aria-label="Rajalakshmi Innovation Center" title="Rajalakshmi Innovation Center">
                  <img className="partner-logo" src="/images/home/rajalakshmi.PNG" alt="Rajalakshmi Innovation Center" />
                </a>
              </div>
              <div className="partner-item" role="listitem">
                <a href="https://itnthub.tn.gov.in/pathfinder-startups.html" target="_blank" rel="noopener noreferrer" aria-label="iTamilnadu Technology Hub" title="iTamilnadu Technology Hub">
                  <img className="partner-logo itnt" src="/images/home/iTNT.png" alt="iTamilnadu Technology Hub" />
                </a>
              </div>
              <div className="partner-item" role="listitem">
                <a href="https://www.forge-iv.co/" target="_blank" rel="noopener noreferrer" aria-label="Forge Innovation Ventures" title="Forge Innovation Ventures">
                  <img className="partner-logo forge" src="/images/home/Forge.png" alt="Forge Innovation Ventures" />
                </a>
              </div>
              <div className="partner-item" role="listitem">
                <a href="https://aws.amazon.com/startups" target="_blank" rel="noopener noreferrer" aria-label="AWS for Startups" title="AWS for Startups">
                  <img className="partner-logo aws" src="/images/home/aws_startup.png" alt="AWS for Startups" />
                </a>
              </div>
              <div className="partner-item" role="listitem">
                <a href="https://www.zoho.com/startups/" target="_blank" rel="noopener noreferrer" aria-label="Zoho for Startups" title="Zoho for Startups">
                  <img className="partner-logo zoho" src="/images/home/zoho.png" alt="Zoho for Startups" />
                </a>
              </div>
            </div>
            <p className="partners-caption">Trusted by leading programs and ecosystems</p>
          </div>
        </section>

        <section className="sticky-home">
          <div className="home-col source">
            <Marquee />
            <div className="container">
              <div className="source-content">
                <p className="primary">[ Our Mission ]</p>
                <h4>To Redefine Accessibility Through Intelligent Assistive Technology</h4>
              </div>
            </div>
          </div>
          <div className="home-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // WHAT WE DO: We create intelligent assistive technology that empowers independence. 
                  From smart glasses that help you remember and translate in real-time, to modular AI APIs 
                  for enterprises — our solutions understand and adapt to your needs, designed for everyone, 
                  excluding no one.
                </p>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img src="/images/company/vision.png" alt="Mission" />
                  </div>
                </div>
                <div className="margin-top-div">
                  <p className="primary">
                    // WHO WE ARE: Based in India, built for the world. We're a team of founders and builders 
                    from innovative organizations who believe technology should be accessible to everyone. 
                    Our work spans hardware and software, unified by core values of Intelligence, Inclusivity, 
                    and Innovation.
                  </p>
                  <div className="about-link-container">
                    <Link href="/company/about" className="about-link">
                      Learn More About Us
                      <MdArrowOutward />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-showcase" id="products">
        <div className="container">
              <HighlightedText
                as="h2"
                text="WHAT WE Work ON"
                highlightedWords={["Work"]}
              />
            </div>
          <div className="products-header">
            
          </div>
          <div className="products-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Our Products & Platform ]</p>
                <h4>The Four Major Product Pillars of Kenesis</h4>
              </div>
              <div className="col">
                <div className="products-copy">
                  <p>
                    From smart wearables to enterprise solutions, Kenesis creates 
                    comprehensive technology that empowers individuals and organizations 
                    to achieve more through intelligent, privacy-first innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bento-section">
          <div className="container">
            <BentoGrid>
              <BentoGridItem 
                size="large"
                header={<img src="/images/product/visionhero.webp" alt="Kenesis Vision" />}
                title="Kenesis Vision"
                description="Hardware + On-Device Intelligence. Smart glasses powered by contextual AI with real-time scene understanding, offline privacy-first operation, and modular industry use-cases."
              />
              <BentoGridItem 
                size="tall"
                header={<img src="/images/platform/platformhero2.png" alt="Kenesis Platform" />}
                title="Kenesis Platform"
                description="APIs + Industry Modules. Full-stack vision AI ecosystem with Core APIs and plug-and-play enterprise integrations."
              />
              <BentoGridItem 
                size="default"
                header={<img src="/images/product/creative.png" alt="Personal Intelligence" />}
                title="Kenesis Personal Intelligence"
                description="Everyday Context-Aware Tools. AI-powered visual utilities for memory recall, journaling, document tracking, and more."
              />
              <BentoGridItem 
                size="wide"
                header={<img src="/images/platform/devv.png" alt="Devverse" />}
                title="Kenesis Devverse"
                description="Developers & Open Innovation Toolkit. SDKs for embedded systems, visual debug tools, and community kits for builders and student innovators."
              />
            </BentoGrid>
            <div className="bento-buttons">
              <Link href="/product" className="bento-button">
                Learn More About Vision
                <MdArrowOutward />
              </Link>
              <Link href="/platform" className="bento-button">
                Learn More About Platform
                <MdArrowOutward />
              </Link>
            </div>
          </div>
        </section>

        <section className="abstract-bg">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </section>

        <section className="contact-cta" id="contact">
          <div className="container">
            <div className="contact-content">
              <div className="contact-text">
                <p className="primary">[ Let's Build Together ]</p>
                <h2>Ready to Transform Your Vision?</h2>
                <p>
                  Whether you're looking to integrate intelligent assistive technology, 
                  develop custom solutions, or explore partnership opportunities — 
                  we're here to help bring your ideas to life.
                </p>
                <div className="contact-features">
                  <div className="contact-feature">
                    <h4>Custom Solutions</h4>
                    <p>Tailored AI implementations for your specific needs</p>
                  </div>
                  <div className="contact-feature">
                    <h4>Enterprise Partnerships</h4>
                    <p>Scalable solutions for organizations and teams</p>
                  </div>
                  <div className="contact-feature">
                    <h4>Developer Support</h4>
                    <p>Comprehensive documentation and technical assistance</p>
                  </div>
                </div>
                <Link href="/contact" className="contact-cta-button">
                  Get in Touch
                  <MdArrowOutward />
                </Link>
              </div>
            </div>
          </div>
        </section>
{/* 
        <section className="carousel">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              id={`project-${item.id}`}
              className="project"
            >
              <div className="project-bg">
                <img src={item.bg} alt="" />
                <div className="hero-img-overlay"></div>
                <div className="hero-img-gradient"></div>
              </div>
              <div className="project-main">
                <img src={item.main} alt="" />
              </div>
              <div className="project-header">
                <div className="project-id">
                  <h2>Archive {item.id}</h2>
                </div>
                <div className="project-whitespace"></div>
                <div className="project-title">
                  <h2>{item.title}</h2>
                </div>
              </div>
              <div className="project-info">
                <div className="project-url">
                  <Link href={item.url}>( The Innovation )</Link>
                </div>
              </div>
              <Link
                href={item.url}
                className="project-overlay-link"
                aria-label={`View ${item.title} project`}
              />
            </div>
          ))}
        </section> */}

        <Footer />
      </div>
    </ReactLenis>
  );
}
