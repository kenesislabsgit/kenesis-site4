"use client";

import Link from "next/link";
import { MdArrowBack, MdEmail } from "react-icons/md";
import "./docs-placeholder.css";

const DocsPlaceholderPage = () => {
  return (
    <div className="docs-placeholder">
      <div className="docs-placeholder-container">
        <div className="docs-placeholder-content">
          <div className="docs-header">
            <p className="docs-label">[ Documentation ]</p>
            <h1>Developer Resources</h1>
          </div>
          
          <div className="docs-info">
            <p className="docs-description">
              Our comprehensive developer documentation is currently being prepared. We're working on detailed API guides, SDKs, integration tutorials, and code examples.
            </p>
            
            <div className="docs-status">
              <div className="status-item">
                <span className="status-label">Status</span>
                <span className="status-value">In Development</span>
              </div>
              <div className="status-item">
                <span className="status-label">Release</span>
                <span className="status-value">Coming Soon</span>
              </div>
            </div>
            
            <div className="docs-features">
              <div className="features-label">What's Coming</div>
              <div className="features-list">
                <div className="feature-item">Complete API reference documentation</div>
                <div className="feature-item">SDK guides for multiple platforms</div>
                <div className="feature-item">Interactive code examples</div>
                <div className="feature-item">Integration tutorials and best practices</div>
                <div className="feature-item">Community forums and support</div>
              </div>
            </div>
          </div>
          
          <div className="docs-actions">
            <Link href="/platform" className="action-link primary">
              <MdArrowBack />
              Back to Platform
            </Link>
            <Link href="/contact" className="action-link secondary">
              <MdEmail />
              Request Early Access
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPlaceholderPage;
