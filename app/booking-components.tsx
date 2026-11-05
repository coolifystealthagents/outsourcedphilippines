const testimonials = [
  { name: "Chad Sublet", quote: "Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives." },
  { name: "Alex Behrens", quote: "They have made a real difference in our day-to-day operations and truly feel like part of our internal team." },
  { name: "Lee Maasen", quote: "Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset." },
];

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  return (
    <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>
      <div className="sa-testimonial-heading">
        <span aria-hidden="true">★★★★★</span>
        <h2 id={contact ? 'contact-client-reviews' : 'booking-client-reviews'}>What Stealth Agents clients say</h2>
      </div>
      <div className="sa-testimonial-viewport">
        <div className="sa-testimonial-track">
          {[0, 1].map(copy => (
            <div className="sa-testimonial-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {testimonials.map(review => (
                <article className="sa-testimonial-card" key={review.name}>
                  <div className="sa-testimonial-stars"><span aria-hidden="true">★★★★★</span><span className="sa-sr-only">5 out of 5 stars</span></div>
                  <blockquote>“{review.quote}”</blockquote>
                  <p>- {review.name}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="sa-testimonial-source">Source: <a href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Stealth Agents client testimonials</a>.</p>
    </section>
  );
}
