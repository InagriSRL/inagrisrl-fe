import logo from '../../assets/images/logo.jpeg';

import { ReactComponent as FacebookIcon } from '../../assets/images/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/images/whatsapp.svg';
import { ReactComponent as EmailIcon } from '../../assets/images/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/images/phone.svg';

const socials = [
	{
		name: 'Facebook',
		url: 'https://facebook.com',
		icon: FacebookIcon,
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com',
		icon: InstagramIcon,
	},
	{
		name: 'Whatsapp',
		url: 'https://whatsapp.com',
		icon: WhatsappIcon,
	},
];

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div id="contacts" className="footer__contacts">
					<h4>CONTATTI</h4>
					<a href="tel: +39 393 33 39 329">
						<div className="footer__contacts__phone">
							<PhoneIcon />
							<p>+39 393 33 39 329</p>
						</div>
					</a>
					<a href="mailto:Inagri.lalallala@gmail.com">
						<div className="footer__contacts__email">
							<EmailIcon />
							<p>inagri.lalallala@gmail.com</p>
						</div>
					</a>

					<div className="footer__contacts__socials">
						{socials.map((social) => {
							const SocialIcon = social.icon;

							return (
								<a href={social.url} target="__blank">
									<SocialIcon />
								</a>
							);
						})}
					</div>
				</div>
				<div className="footer__rights">
					<img alt="logo" src={logo} />
					<small>Tutti i diritti sono riservati ad Inagri SRL</small>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
