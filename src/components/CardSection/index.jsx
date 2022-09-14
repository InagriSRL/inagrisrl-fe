const CardSection = ({ variant = 'right', text, image }) => {
	const classes =
		variant === 'left' ? 'card-section--left' : 'card-section--right';

	return (
		<div className={`card-section ${classes}`}>
			<div className="card-section__box">
				<img src={image} alt="test" />
			</div>
			<div className="card-section__text">
				<p>{text}</p>
			</div>
		</div>
	);
};

export default CardSection;
