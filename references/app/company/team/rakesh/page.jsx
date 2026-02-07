"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const RakeshPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Dr. Rakesh Kumar Mahendran</h1>
          <p className="role">Head of R&D & Advisor</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/rakesh.webp" alt="Dr. Rakesh Kumar Mahendran" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>Research & Development</h2>
                <p>
                  Dr. Rakesh leads our research and development initiatives, 
                  driving innovation in accessibility technology through cutting-edge 
                  research. With extensive academic and industry experience, he 
                  ensures our solutions are grounded in scientific rigor while 
                  pushing the boundaries of what's possible.
                </p>
                <p>
                  His research leadership enables us to develop breakthrough 
                  technologies that address real-world accessibility challenges, 
                  creating solutions that are both innovative and practical for 
                  everyday use.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/rakeshkumarmahendran/" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default RakeshPage; 