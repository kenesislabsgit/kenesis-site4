"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./archive.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ArchivePage = () => {
  const container = useRef();

  // controls pinning of the source section
  useGSAP(
    () => {
      let pinAnimation;

      const initPinning = () => {
        if (pinAnimation) {
          pinAnimation.kill();
        }

        if (window.innerWidth > 900) {
          pinAnimation = ScrollTrigger.create({
            trigger: ".sticky-archive",
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
      <div className="archive" ref={container}>
        <section className="archive-hero">
          <div className="container">
            <ShuffleText
              as="h1"
              text="Archive 101: Kenesis Vision Pro Prototype"
            />
            <div className="archive-hero-img-wrapper">
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <div className="archive-hero-img">
                  <img src="/images/carousel/carousel1.jpeg" alt="" />
                </div>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-archive">
          <div className="archive-col source">
            <div className="container">
              <div className="source-img">
                <img src="/images/home/prompt-eg-1.jpeg" alt="" />
              </div>
              <div className="source-content">
                <p className="primary">[ Original Concept ]</p>
                <h4>Vision Beyond Boundaries</h4>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // INNOVATION: Privacy-first smart glasses with decentralized 
                  processing, featuring augmented reality capabilities without 
                  cloud dependency or user surveillance.
                </p>
                <p className="secondary">[ Technology Partner ]</p>
                <h4>Kenesis Labs</h4>
                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img src="/images/home/prompt-eg-2.jpeg" alt="" />
                  </div>
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img src="/images/home/prompt-1.jpeg" alt="" />
                    </div>
                    <div className="sub-images-col">
                      <img src="/images/home/prompt-2.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-archive">
          <div className="next-archive-bg"></div>
          <div className="marquee-archive">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">[ Archive 102 ]</p>
            <div className="next-archive-img">
              <img src="/images/carousel/carousel2.jpeg" alt="" />
            </div>
            <h2>Privacy-First Smart Interface</h2>
          </div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ArchivePage;
