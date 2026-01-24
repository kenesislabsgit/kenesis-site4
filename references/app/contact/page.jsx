"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { MdArrowOutward, MdEmail, MdPhone, MdLocationOn, MdBusiness } from "react-icons/md";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";
import ShuffleText from "@/components/ShuffleText/ShuffleText";

import "./contact.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const container = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  // Controls parallax effects on scroll
  useGSAP(
    () => {
      // Contact info items fade in
      const contactItems = gsap.utils.toArray(".contact-info-item");
      contactItems.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
          onUpdate: (self) => {
            const opacity = self.progress;
            gsap.set(item, {
              opacity: 0.4 + (0.6 * opacity),
              y: 40 * (1 - opacity),
            });
          },
        });
      });

      // Form animation
      ScrollTrigger.create({
        trigger: ".contact-form",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
        onUpdate: (self) => {
          const opacity = self.progress;
          gsap.set(".contact-form", {
            opacity: 0.3 + (0.7 * opacity),
            y: 50 * (1 - opacity),
          });
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@kenesis.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <ReactLenis root>
      <div className="contact" ref={container}>
        {/* Contact Form Section - First */}
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-section-header">
              <p className="primary">[ Contact Details ]</p>
              <h2>We'd Love to Hear From You</h2>
              <p className="contact-header-description">
                Whether you're interested in our assistive technology solutions, 
                want to explore partnership opportunities, or simply have questions 
                about our work, we're here to help. Reach out and let's start a conversation.
              </p>
            </div>
            <div className="form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="inquiryType">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="press">Press & Media</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                  ></textarea>
                </div>
                <button type="submit" className="form-submit-btn">
                  Send Message
                  <MdArrowOutward />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information Section - Second */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-section-header">
              <p className="primary">[ Contact Information ]</p>
              <h2>Get in Touch</h2>
            </div>
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-label">Email</div>
                <div className="contact-value">contact@kenesis.in</div>
                <div className="contact-note">Primary contact for all inquiries</div>
              </div>

              <div className="contact-info-item">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 93422 81662</div>
                <div className="contact-note">Available during business hours</div>
              </div>

              <div className="contact-info-item">
                <div className="contact-label">Location</div>
                <div className="contact-value">Chennai, India</div>
                <div className="contact-note">iTamilnadu Technology Hub (iTNT)</div>
              </div>

              <div className="contact-info-item">
                <div className="contact-label">Address</div>
                <div className="contact-value">Anna University, Sir C V Raman Science Block 3rd Floor</div>
                <div className="contact-note">Kotturpuram, Chennai, Tamil Nadu 600025</div>
                <Link href="https://maps.google.com/?q=Anna+University+Chennai" target="_blank" rel="noopener noreferrer" className="contact-map-link">
                  View on Map <MdArrowOutward />
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <div className="social-label">Follow Us</div>
              <div className="social-links-minimal">
                <Link href="https://www.linkedin.com/company/thekenesis" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </Link>
                <Link href="http://x.com/KenesisLabs" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
                  <FaTwitter />
                  <span>Twitter</span>
                </Link>
                <Link href="https://www.instagram.com/kenesislabs" target="_blank" rel="noopener noreferrer" className="social-link-minimal">
                  <FaInstagram />
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Abstract Background - Reverse Order */}
        <section className="contact-abstract-bg">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </section>

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default ContactPage; 