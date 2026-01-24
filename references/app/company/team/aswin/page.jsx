"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const AswinPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Aswin J D</h1>
          <p className="role">Chief AI Officer</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/aswin.webp" alt="Aswin J D" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>AI & Machine Learning</h2>
                <p>
                  Aswin leads our artificial intelligence initiatives, developing 
                  sophisticated ML models that power our accessibility solutions. 
                  With expertise in computer vision and natural language processing, 
                  he creates intelligent systems that understand and assist users 
                  in real-time.
                </p>
                <p>
                  His AI innovations enable our products to provide contextual 
                  assistance and personalized experiences that adapt to individual 
                  user needs and preferences.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/aswin-jd-349860257/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </Link>
                  <Link href="https://twitter.com/KenesisLabs" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaTwitter />
                    <span>Twitter</span>
                  </Link>
                  <Link href="mailto:contact@kenesis.in" className="social-link">
                    <MdEmail />
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AswinPage; 