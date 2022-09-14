import MainBanner from './components/MainBanner';
import Button from './components/Button';
import ContentDivider from './components/ContentDivider';
import CardSection from './components/CardSection';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

import cardData from './utils/cardData';
import products from './utils/products';
import { useState } from 'react';

const App = () => {
	const [showMore, setShowMore] = useState(false);

	const handleButtonOnClick = () => {
		showMore ? setShowMore(false) : setShowMore(true);
	};

	return (
		<div className="page">
			<div className="page__banner">
				<MainBanner>
					<h1>Inagri</h1>
					<p>
						Azienda leader in produzione di prodotti speciali ed innovativi per
						distributori e coltivatori
					</p>
					<Button
						href="#contacts"
						classNames="button--blue"
						text="Contattaci"
					/>
				</MainBanner>
			</div>

			<div className="page__main">
				<div className="page__main__us">
					<h2>CHI SIAMO</h2>
					<ContentDivider />
					{cardData.map((card) => (
						<CardSection
							variant={card.variant}
							text={card.text}
							image={card.image}
						/>
					))}
				</div>

				<div className="page__main__products">
					<h2>PRODOTTI</h2>
					<ContentDivider />
					<div className="page__products__wrapper">
						{products.map((product, index) => {
							const classes =
								index <= 2 && !showMore ? 'product-card--hidden' : '';

							return (
								<ProductCard
									classNames={classes}
									key={index}
									name={product.name}
									image={product.image}
									description={product.description}
								/>
							);
						})}
					</div>
					<Button
						type="button"
						onClickHandler={handleButtonOnClick}
						classNames="button--green"
						text={!showMore ? 'altro' : 'nascondi'}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
