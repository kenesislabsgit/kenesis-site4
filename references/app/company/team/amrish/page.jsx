"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const AmrishPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Amrish P</h1>
          <p className="role">Chief Executive Officer</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/amr.webp" alt="Amrish P" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>Leadership Vision</h2>
                <p>
                  Amrish is a visionary leader with expertise in administration, 
                  marketing, and branding. As the CEO, he guides the company's overall 
                  strategy and growth, ensuring Kenesis Labs remains at the forefront of 
                  accessibility innovation.
                </p>
                <p>
                  With a deep understanding of market dynamics and user needs, Amrish 
                  leads our mission to create inclusive technology solutions that 
                  empower individuals with disabilities.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://linkedin.com/in/imamrish" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default AmrishPage; 