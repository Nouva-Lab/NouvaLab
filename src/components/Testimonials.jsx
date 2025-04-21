import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Lebo M.",
      text: "EduTube helped me understand algebra like never before! The videos are super engaging.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Thabo N.",
      text: "This is the best learning platform! Everything is clear and easy to follow.",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Nandi K.",
      text: "Thanks to EduTube, I passed my exams with flying colors!",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Students Are Saying</h2>
      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <p>"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
