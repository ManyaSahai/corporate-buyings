"use client";

import React from "react";

// 1. Data: Easier to manage content here than inside the JSX
const reviews = [
  {
    id: 1,
    name: "Saumya Sharma",
    role: "Verified Buyer",
    content:
      "Excellent service — fast delivery and great support. The packaging was eco-friendly which I really appreciated!",
    initials: "SK",
    bgColor: "#EEF2FF", // Light Indigo
    textColor: "#4F46E5", // Indigo
  },
  {
    id: 2,
    name: "Rohan Agarwal",
    role: "Loyal Customer",
    content:
      "Top-quality products and very reasonable prices. I've recommended this store to all my colleagues.",
    initials: "RA",
    bgColor: "#ECFDF5", // Light Emerald
    textColor: "#059669", // Emerald
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Verified Buyer",
    content:
      "Great shopping experience and friendly customer care. The website was smooth and checkout was a breeze.",
    initials: "PS",
    bgColor: "#FFF7ED", // Light Orange
    textColor: "#EA580C", // Orange
  },
];

export default function Testimonials() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Section Header */}
        <div style={styles.header}>
          <h2 style={styles.heading}>What our customers say</h2>
          <p style={styles.subHeading}>Real stories from our community.</p>
        </div>

        {/* Grid Layout */}
        <div style={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} style={styles.card}>
              {/* Star Rating Icon (SVG) */}
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    fill="#FBBF24"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p style={styles.reviewText}>"{review.content}"</p>

              {/* Card Footer / User Info */}
              <div style={styles.footer}>
                <div
                  style={{
                    ...styles.avatar,
                    background: review.bgColor,
                    color: review.textColor,
                  }}
                >
                  {review.initials}
                </div>
                <div>
                  <div style={styles.name}>{review.name}</div>
                  <div style={styles.role}>{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Styles Object: Keeps the JSX clean and the design consistent
const styles = {
  section: {
    background: "#f9fafb", // Very light gray for modern feel
    padding: "80px 24px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#111827",
    marginBottom: "16px",
    letterSpacing: "-0.025em",
  },
  subHeading: {
    fontSize: "1.125rem",
    color: "#6B7280",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive grid
    gap: "32px",
  },
  card: {
    background: "#ffffff",
    padding: "32px",
    borderRadius: "20px",
    boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)", // Soft, modern shadow
    border: "1px solid #f3f4f6",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  stars: {
    display: "flex",
    gap: "4px",
    marginBottom: "20px",
  },
  reviewText: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    color: "#374151",
    marginBottom: "28px",
    fontStyle: "italic",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    borderTop: "1px solid #f3f4f6",
    paddingTop: "20px",
    marginTop: "auto",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  name: {
    fontWeight: "700",
    color: "#111827",
    fontSize: "0.95rem",
  },
  role: {
    fontSize: "0.85rem",
    color: "#9CA3AF",
  },
} as const;
