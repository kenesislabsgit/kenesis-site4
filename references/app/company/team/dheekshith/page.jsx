"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const DheekshithPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Dheekshith T</h1>
          <p className="role">Chief Information Officer</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/dheek.webp" alt="Dheekshith T" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>Information Strategy</h2>
                <p>
                  Dheekshith oversees our information architecture and data strategy, 
                  ensuring secure and efficient management of user data and system 
                  information. With expertise in cybersecurity and data governance, 
                  he maintains the highest standards of privacy and security.
                </p>
                <p>
                  His strategic approach to information management enables us to 
                  deliver personalized experiences while protecting user privacy 
                  and maintaining compliance with global data protection standards.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/dheekshith-t/" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default DheekshithPage; 