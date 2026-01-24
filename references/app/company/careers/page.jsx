"use client";

import Link from "next/link";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import Footer from "@/components/Footer/Footer";

import "./careers.css";

const CareersPage = () => {
  return (
    <div className="careers">
      <section className="careers-main">
        <div className="container">
          <div className="careers-content">
            <div className="careers-header">
              <p className="careers-label">[ Careers ]</p>
              <h1>Join Our Mission</h1>
            </div>
            
            <div className="careers-info">
              <p className="careers-description">
                We're building the future of assistive technology. Our team is passionate about creating intelligent solutions that empower independence and redefine accessibility.
              </p>
              
              <div className="careers-status">
                <div className="status-item">
                  <span className="status-label">Team Size</span>
                  <span className="status-value">7+ Members</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Location</span>
                  <span className="status-value">Chennai, India</span>
                </div>
              </div>
              
              <div className="careers-roles">
                <div className="roles-label">Areas We're Growing In</div>
                <div className="roles-list">
                  <div className="role-item">AI/ML Engineering & Research</div>
                  <div className="role-item">Full Stack Development</div>
                  <div className="role-item">Hardware & Embedded Systems</div>
                  <div className="role-item">UX/UI Design & Research</div>
                  <div className="role-item">Computer Vision & Robotics</div>
                  <div className="role-item">Business Development</div>
                </div>
              </div>
              
              <div className="careers-note">
                <p>We believe in building a diverse, inclusive team of passionate individuals who share our mission to make technology accessible to everyone.</p>
              </div>
            </div>
            
            <div className="careers-actions">
              <Link href="/contact" className="action-link primary">
                <MdEmail />
                Get in Touch
              </Link>
              <Link href="/company/about" className="action-link secondary">
                <MdArrowOutward />
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;