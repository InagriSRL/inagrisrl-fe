const ProductCard = ({ image, name, description, classNames }) => {
	return (
		<div className={`${classNames} product-card`}>
			<img alt={name} src={image} />
			<h3>{name}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ProductCard;
