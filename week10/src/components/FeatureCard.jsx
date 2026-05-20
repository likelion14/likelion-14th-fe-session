const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="feature-card">
      <div className="feature-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className="feature-card-icon" aria-hidden="true">
        {icon}
      </span>
    </article>
  );
};

export default FeatureCard;
