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

import "./about.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const container = useRef();

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
            trigger: ".sticky-about",
            start: "top top",
            endTrigger: ".gallery",
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

  return (
    <ReactLenis root>
      <div className="about" ref={container}>
        <section className="about-hero">
          <div className="container">
            <ShuffleText
              as="h1"
              text="ABOUT KENESIS"
            />
            <div className="about-hero-img-wrapper">
              <div className="about-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="about-hero-img-wrapper-row">
                <div className="about-hero-img">
                  <img src="/images/company/about1.png" alt="About Kenesis" />
                </div>
              </div>
              <div className="about-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-about">
          <div className="about-col source">
            <div className="container">
              <div className="source-img">
                <img src="/images/home/kenlogo.png" alt="Our Mission" />
              </div>
              <div className="source-content">
                <p className="primary">[ Our Mission ]</p>
                <h4>To Redefine Accessibility Through Intelligent Assistive Technology</h4>
              </div>
            </div>
          </div>
          <div className="about-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // MISSION: Empowering independence through AI-powered solutions that understand and adapt, 
                  designed for everyone, excluding no one. We're backed by founders and builders from 
                  innovative organizations who believe in our vision of making technology accessible to everyone.
                </p>
                <p className="secondary">[ Core Values ]</p>
                <h4>Intelligence • Inclusivity • Innovation</h4>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img src="/images/company/vision.png" alt="Mission" />
                  </div>
                </div>
                <div className="margin-top-div">
                  <p className="primary">
                    // VISION: A World Where Your Environment is as Intelligent as Your Device. 
                    We imagine a world where a pair of glasses can help you remember, assist you at work, 
                    translate signs in real time, or warn you of danger — without ever compromising your privacy.
                  </p>
                </div>
                <div className="margin-top-div">
                  <p className="primary">
                    // WORK: Our work spans both hardware and software, unified by this core belief. 
                    From smart, lightweight wearables for real-time assistance to modular AI APIs and 
                    industry packs for enterprises and developers.
                  </p>
                  <p className="secondary">[ Our Products ]</p>
                  <h4>Kenesis Vision • Platform • Devverse • Personal Intelligence</h4>
                </div>
                <div className="margin-top-div">
                  <p className="primary">
                    // LOCATION: Based in India, Built for the World. Kenesis Labs is proudly headquartered 
                    in Chennai, with a growing ecosystem of collaborators, universities, and field partners 
                    across India and beyond. We're building in the global south, for the entire planet — 
                    and believe frontier innovation can come from anywhere, especially places that understand 
                    constraint, diversity, and human resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-final-cta">
          <div className="about-final-bg"></div>
          <div className="marquee-about">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">[ Start Building ]</p>
            <div className="about-final-img">
              <img src="/images/company/abtcta.png" alt="Build with Kenesis" />
            </div>
            <h2>Want to Work With Us?</h2>
            <p>
              Whether you're fixing machines, translating street signs, or logging your next idea — Kenesis helps you see what really matters.
            </p>
            <div className="final-cta-buttons">
              <Link href="/contact" className="cta-primary">
                Join Our Team
              </Link>
              <Link href="/contact" className="cta-secondary">
                Partner With Us
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

export default AboutPage; 