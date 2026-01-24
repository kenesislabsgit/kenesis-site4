"use client";

import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Marquee from "@/components/Marquee/Marquee";
import Footer from "@/components/Footer/Footer";

import "./team.css";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Amrish P",
      role: "Chief Executive Officer",
      image: "/images/company/team/amr.webp",
      slug: "amrish"
    },
    {
      name: "Prajein C K",
      role: "Chief Operating Officer",
      image: "/images/company/team/ck.webp",
      slug: "prajein"
    },
    {
      name: "Daniel Das K",
      role: "Chief Technology Officer",
      image: "/images/company/team/dan.webp",
      slug: "daniel"
    },
    {
      name: "Aswin J D",
      role: "Chief AI Officer",
      image: "/images/company/team/aswin.webp",
      slug: "aswin"
    },
    {
      name: "Dheekshith T",
      role: "Chief Information Officer",
      image: "/images/company/team/dheek.webp",
      slug: "dheekshith"
    },
    {
      name: "Dinesh Kumar K",
      role: "Chief Product Officer",
      image: "/images/company/team/dk.webp",
      slug: "dinesh"
    },
    {
      name: "Dr. Rakesh Kumar Mahendran",
      role: "Head of R&D & Advisor",
      image: "/images/company/team/rakesh.webp",
      slug: "rakesh"
    }
  ];

  return (
    <div className="team">
      <section className="team-hero">
        <div className="container">
          <h1>Seven Minds, One Vision</h1>
          <p className="subtitle">Meet the team behind our mission to build the future</p>
        </div>
      </section>

      <section className="team-grid">
        <div className="container">
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <Link 
                key={index} 
                href={`/company/team/${member.slug}`} 
                className="team-member-card"
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="outro">
        <div className="container">
          <h2>Tomorrow, tailored.</h2>
        </div>
      </section>

      <section className="next-team">
        <div className="next-team-bg"></div>
        <div className="marquee-team">
          <Marquee />
        </div>
        <div className="container">
          <p className="primary">[ Join Our Mission ]</p>
          <div className="next-team-img">
            <img src="/images/company/team/teamcta.webp" alt="Join Our Team" />
          </div>
          <h2>Want to Build the Future?</h2>
          <div className="final-cta-buttons">
            <Link href="/company/careers" className="cta-primary">
              View Open Positions
            </Link>
            <Link href="/contact" className="cta-secondary">
              Get in Touch
              <MdArrowOutward />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage; 