"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";

import "../member.css";

const DanielPage = () => {
  return (
    <div className="member-page">
      <Link href="/company/team" className="back-button">
        <MdArrowBack />
        Back to Team
      </Link>

      <section className="member-hero">
        <div className="container">
          <h1>Daniel Das K</h1>
          <p className="role">Chief Technology Officer</p>
          
          <div className="member-layout">
            <div className="member-image-section">
              <img src="/images/company/team/dan.webp" alt="Daniel Das K" />
            </div>
            <div className="member-info-section">
              <div className="member-bio">
                <h2>Technology Innovation</h2>
                <p>
                  Daniel spearheads our technological vision and development, 
                  leading the creation of cutting-edge accessibility solutions. 
                  With deep expertise in software architecture and emerging 
                  technologies, he ensures our products remain at the forefront 
                  of innovation.
                </p>
                <p>
                  His technical leadership drives the development of intuitive 
                  and powerful tools that empower users with disabilities to 
                  navigate the digital world with confidence and independence.
                </p>
              </div>
              
              <div className="member-socials">
                <h3>Connect</h3>
                <div className="social-links">
                  <Link href="https://www.linkedin.com/in/imdanieldas/" target="_blank" rel="noopener noreferrer" className="social-link">
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

export default DanielPage; 