"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const DineshPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Dinesh Kumar K</h1>
          <p className="role">Chief Product Officer</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/dk.webp" alt="Dinesh Kumar K" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>Product Strategy</h2>
                <p>
                  Dinesh leads our product development and user experience strategy, 
                  ensuring our solutions meet the real needs of users with disabilities. 
                  With deep understanding of accessibility requirements and user research, 
                  he drives product innovation that makes a meaningful difference.
                </p>
                <p>
                  His user-centered approach ensures that every feature we develop 
                  enhances accessibility and independence for our users, creating 
                  products that truly empower and enable.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/dinesh-kumar-63b2ba24a/" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default DineshPage; 