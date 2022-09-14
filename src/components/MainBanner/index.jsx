const MainBanner = ({ children }) => {
	return (
		<div className="main-banner">
			<div className="main-banner__overlay" />
			<div className="main-banner__content">{children}</div>
		</div>
	);
};

export default MainBanner;
