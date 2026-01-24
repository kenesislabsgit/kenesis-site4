"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";
import ApiMinimap from "@/components/ApiMinimap/ApiMinimap";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid/BentoGrid";

import "./platform.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PlatformPage = () => {
  const container = useRef();
  
  // Dynamic text for personal section
  const personalTexts = [
    "Two-part consumer suite that brings our tech to the people.",
    "Mainstream personal use meets dedicated accessibility tools.",
    "From everyday insights to life-changing assistance.",
    "Privacy-first intelligence for everyone."
  ];
  
  const personalFeatures = [
    "Kenesis Lens: Visual journaling, smart summaries, whiteboard capture",
    "Kenesis Assist: Live narration, object guidance, episodic memory for blind users", 
    "Freemium model with Pro features (₹199/mo) and NGO distribution",
    "Full integration with NVDA/JAWS, haptics, and voice queries"
  ];
  
  const [currentPersonalText, setCurrentPersonalText] = useState(0);
  const [currentFeatureText, setCurrentFeatureText] = useState(0);
  
  // Auto-cycle personal text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPersonalText((prev) => (prev + 1) % personalTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  // Auto-cycle feature text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureText((prev) => (prev + 1) % personalFeatures.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Controls parallax effects on scroll
  useGSAP(
    () => {
      // Hero image parallax
      ScrollTrigger.create({
        trigger: ".platform-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const yMove = -50 * self.progress;
          gsap.set(".platform-hero-img img", {
            y: yMove,
          });
        },
      });

      // API card images parallax
      const apiImages = gsap.utils.toArray(".api-card-img");
      apiImages.forEach((img) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const yMove = -25 * self.progress;
            gsap.set(img.querySelector("img"), {
              y: yMove,
            });
          },
        });
      });

      // Industry module cards fade in
      const industryCards = gsap.utils.toArray(".industry-card");
      industryCards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
          onUpdate: (self) => {
            const opacity = self.progress;
            gsap.set(card, {
              opacity: 0.4 + (0.6 * opacity),
              y: 40 * (1 - opacity),
            });
          },
        });
      });

      // DevVerse section parallax
      const devImages = gsap.utils.toArray(".dev-feature-img");
      devImages.forEach((img) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          onUpdate: (self) => {
            const yMove = -35 * self.progress;
            gsap.set(img.querySelector("img"), {
              y: yMove,
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
      <div className="platform" ref={container}>
        <section className="platform-hero">
          <div className="platform-hero-img">
            <img src="/images/platform/platformhero.png" alt="Kenesis Platform" />
            <div className="hero-img-overlay"></div>
            <div className="hero-img-gradient"></div>
          </div>
          <div className="container">
            <div className="platform-hero-content">
              <h1>
                <span className="hero-vision">VISION</span>
                <span className="hero-platform">PLATFORM</span>
              </h1>
              <h2>The Contextual AI Backbone — APIs & Developer Ecosystem</h2>
              <p className="hero-subtitle">
                Build reasoning-powered, camera-first applications that don't just detect, but interpret and act. The full-stack platform for contextual intelligence.
              </p>
              <div className="hero-tags">
                <span>Reasoning APIs</span>
                <span>Domain Modules</span>
                <span>Devverse SDKs</span>
                <span>Personal Apps</span>
              </div>
              <div className="hero-cta">
                <Link href="/docs-placeholder" className="cta-primary">
                  Explore Developer Docs
                </Link>
                <Link href="/coming-soon" className="cta-secondary">
                  Request API Access
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-apis-intro">
          <div className="container">
            <div className="platform-section-header">
              <p className="primary">[ Core Reasoning APIs ]</p>
              <ShuffleText
                as="h2"
                text="Context Intelligence, Not Just Detection"
                triggerOnScroll={true}
              />
            </div>
            <div className="apis-intro">
              <h3>
                Three core APIs that power contextual reasoning — understanding what's happening, remembering patterns over time, and proactively suggesting actions before you need them.
              </h3>
              <p className="apis-subtitle">
                Transformer-powered inference under 100ms. Edge-first, cloud-optional. Privacy by design.
              </p>
            </div>
            <div className="apis-compatibility">
              <p className="secondary">Works with Kenesis Glasses, smartphone cameras, or any device feed. SDK available for all major platforms.</p>
            </div>
          </div>
        </section>

        <ApiMinimap />

        <section className="platform-industry">
          {/* <div className="industry-bg"></div>
          <div className="marquee-section">
            <Marquee />
          </div> */}
          <div className="container">
            <div className="platform-section-header">
              <p className="primary">[ Domain Modules ]</p>
              <h2>Pre-tuned Vertical Reasoners for Enterprise</h2>
            </div>
            <div className="industry-intro">
              <h3>Industry-specific reasoning modules built on our core APIs — plug directly into your operations with zero training required.</h3>
            </div>
            <BentoGrid>
              <BentoGridItem size="large">
                <div className="bento-item-header">
                  <img src="/images/platform/agri.png" alt="Agriculture AI" className="feature-img" />
                </div>
                <div className="bento-item-content">
                  <h4 className="bento-item-title">Agriculture</h4>
                  <p className="bento-item-description">Crop monitoring, pest detection, harvest estimation</p>
                </div>
              </BentoGridItem>
              
              <BentoGridItem size="tall">
                <div className="bento-item-header">
                  <img src="/images/platform/med.png" alt="Medical AI" className="feature-img" />
                </div>
                <div className="bento-item-content">
                  <h4 className="bento-item-title">Medical</h4>
                  <p className="bento-item-description">Surgery overlay, patient vitals, diagnostic annotation</p>
                </div>
              </BentoGridItem>
              
              <BentoGridItem size="default">
                <div className="bento-item-header">
                  <img src="/images/platform/edu.png" alt="Education AI" className="feature-img" />
                </div>
                <div className="bento-item-content">
                  <h4 className="bento-item-title">Education</h4>
                  <p className="bento-item-description">Smart note-taking, whiteboard capture, explainers</p>
                </div>
              </BentoGridItem>
              
              <BentoGridItem size="default">
                <div className="bento-item-header">
                  <img src="/images/platform/logi.png" alt="Logistics AI" className="feature-img" />
                </div>
                <div className="bento-item-content">
                  <h4 className="bento-item-title">Logistics</h4>
                  <p className="bento-item-description">Package scans, inventory detection, bin mapping</p>
                </div>
              </BentoGridItem>
              
              <BentoGridItem size="default">
                <div className="bento-item-header">
                  <img src="/images/platform/retail.png" alt="Retail AI" className="feature-img" />
                </div>
                <div className="bento-item-content">
                  <h4 className="bento-item-title">Retail</h4>
                  <p className="bento-item-description">Label recognition, shelf alerts, store analytics</p>
                </div>
              </BentoGridItem>
            </BentoGrid>
            <div className="industry-note">
              <p className="secondary">Each module combines our reasoning APIs with domain-specific training. Deploy on-premise, edge, or cloud.</p>
            </div>
          </div>
        </section>

        <section className="platform-devverse">
          <div className="container">
            <div className="platform-section-header">
              <p className="primary">[ Kenesis Devverse ]</p>
              <ShuffleText
                as="h2"
                text="The Builder Playground — SDKs, Kits, and Community"
                triggerOnScroll={true}
              />
            </div>
            <div className="devverse-content">
              <div className="devverse-col">
                <div className="devverse-intro">
                  <h3>Open innovation engine for hackers, student teams, and emerging AI developers. The Raspberry Pi of vision AI.</h3>
                </div>
                <div className="dev-features-list">
                  <div className="dev-feature">
                    <h4>Dev Kits</h4>
                    <p>Camera + compute module + battery starter kits</p>
                  </div>
                  <div className="dev-feature">
                    <h4>Platform SDKs</h4>
                    <p>Raspberry Pi, Jetson Nano, ESP32-CAM, and mobile</p>
                  </div>
                  <div className="dev-feature">
                    <h4>Visual Debug Tool</h4>
                    <p>Scene graph visualizer and memory tracker for AI flows</p>
                  </div>
                  <div className="dev-feature">
                    <h4>Community Hub</h4>
                    <p>Templates, challenges, and open-source project showcase</p>
                  </div>
                </div>
              </div>
              <div className="devverse-col devverse-visual">
                <div className="dev-feature-img">
                  <img src="/images/platform/devv.png" alt="Devverse Tools" />
                  <div className="dev-img-overlay"></div>
                </div>
              </div>
            </div>
            <div className="devverse-note">
              <p className="secondary">Driving developer-led growth — positioning Kenesis as the go-to platform for vision AI innovation.</p>
            </div>
          </div>
        </section>

        <section className="platform-personal">
          <div className="container">
            <div className="platform-section-header">
              <p className="primary">[ Kenesis Personal ]</p>
              <h2>Dual App Suite: Everyday Context AI + Accessibility OS</h2>
            </div>
            <div className="personal-content">
              <div className="personal-intro">
                <ShuffleText 
                  text={personalTexts[currentPersonalText]}
                  as="h3"
                  triggerOnScroll={true}
                  key={`personal-${currentPersonalText}`}
                />
              </div>
              <div className="personal-features">
                <div className="personal-feature-dynamic">
                  <ShuffleText 
                    text={personalFeatures[currentFeatureText]}
                    as="p"
                    triggerOnScroll={true}
                    key={`feature-${currentFeatureText}`}
                    className="personal-feature-text"
                  />
                </div>
              </div>
              <div className="personal-privacy">
                <p className="secondary">Grounds our social mission while building traction in high-impact, grant-funded accessibility markets.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="platform-final-cta">
          <div className="platform-final-bg"></div>
          <div className="marquee-platform">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">[ Start Building ]</p>
            <div className="platform-final-img">
              <img src="/images/platform/platcta.png" alt="Build with Kenesis" />
            </div>
            <h2>Start Building with Contextual Intelligence.</h2>
            <div className="final-cta-buttons">
              <Link href="/docs-placeholder" className="cta-primary">
                Explore Developer Docs
              </Link>
              <Link href="/coming-soon" className="cta-secondary">
                Request Early Access
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

export default PlatformPage; 