"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const PrajeinPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Prajein C K</h1>
          <p className="role">Chief Operating Officer</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/ck.webp" alt="Prajein C K" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>Operational Excellence</h2>
                <p>
                  Prajein leads our operational strategy and execution, ensuring 
                  seamless delivery of our accessibility solutions. With expertise 
                  in process optimization and team management, he drives efficiency 
                  across all aspects of our business operations.
                </p>
                <p>
                  His strategic approach to operations ensures that our innovative 
                  technologies reach users effectively while maintaining the highest 
                  standards of quality and accessibility.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/prajeinck/" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default PrajeinPage; 