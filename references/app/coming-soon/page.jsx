"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import "./coming-soon.css";

const ComingSoonPage = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-content">
          <div className="coming-soon-header">
            <p className="coming-soon-label">[ Status ]</p>
            <h1>Coming Soon</h1>
          </div>
          
          <div className="coming-soon-info">
            <p className="coming-soon-description">
              This feature is currently in development. We're working hard to bring you something amazing.
            </p>
            
            <div className="coming-soon-status">
              <div className="status-item">
                <span className="status-label">Status</span>
                <span className="status-value">In Development</span>
              </div>
              <div className="status-item">
                <span className="status-label">Timeline</span>
                <span className="status-value">Updates Coming Soon</span>
              </div>
            </div>
          </div>
          
          <div className="coming-soon-actions">
            <Link href="/" className="action-link primary">
              <MdArrowBack />
              Back to Home
            </Link>
            <Link href="/contact" className="action-link secondary">
              <MdEmail />
              Get Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
