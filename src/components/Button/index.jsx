const Button = ({ classNames = '', href, text, onClickHandler, type }) => {
	if (href) {
		return (
			<a href={href} className={`button ${classNames}`}>
				{text}
			</a>
		);
	}

	return (
		<button
			type={type}
			onClick={onClickHandler}
			className={`button ${classNames}`}
		>
			{text}
		</button>
	);
};

export default Button;
