import React, { useEffect, useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Button from "../Button";
import LogoImg from "../../assests/images/Logo.png";
import LinkedInIcon from "../../assests/icons/LinkedInIcon";
import FacebookIcon from "../../assests/icons/FacebookIcon";
import TelegramIcon from "../../assests/icons/TelegramIcon";
import CloseIcon from "../../assests/icons/CloseIcon";
import MenuIcon from "../../assests/icons/MenuIcon";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

import AppContext from "./../../context/AppContext.jsx";

import { useStyles } from "./styles";

const InfoNav = () => {
	const { lang } = useContext(AppContext);

	let link;

	if (lang === "uk") {
		link = "https://secure.wayforpay.com/donate/d4860d51432ee";
	} else if (lang === "ru") {
		link = "https://secure.wayforpay.com/donate/db2604f55f0d1";
	}

	function createOrder(amount, order_desc) {
		var button = window?.$ipsp.get("button");
		button.setMerchantId(1503310);
		button.setAmount(amount, "USD");
		button.setResponseUrl("http://example.com/result/");
		button.setHost("pay.fondy.eu");
		button.addField({
			label: "Описание покупки",
			name: "order_desc",
			value: order_desc,
		});
		return button.getUrl();
	}

	const classes = useStyles();
	const [menuOpened, setMenuOpened] = useState(false);

	const matches = useMediaQuery("(min-width:1025px)");
	const xsDevice = useMediaQuery("(max-width:768px)");

	useEffect(() => {
		if (matches) {
			setMenuOpened(false);
		}
	}, [matches]);

	useEffect(() => {
		const onScroll = () => setMenuOpened(false);
		// clean up code
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<AppBar style={{ background: "transparent" }}>
				<Toolbar
					className={!menuOpened ? classes.main : classes.mainMob}>
					<Container
						className={!menuOpened ? classes.main : classes.mainMob}
						maxWidth='md'>
						{!menuOpened && (
							<>
								<LangSwitcher />
								{!xsDevice && (
									<>
										<a
											href='tel:+380 (98) 157 68 90'
											className={classes.linksToContact}>
											+380 (98) 157 68 90
										</a>
										<a
											href='mailto:bfIlovelife@gmail.com'
											className={classes.linksToContact}>
											bfIlovelife@gmail.com
										</a>
									</>
								)}
							</>
						)}
						{matches ? (
							<div className={classes.socialIconsBlock}>
								<a
									target='_blank'
									href='https://www.linkedin.com/company/nazustrichzhittyu'
									rel='noreferrer'>
									<LinkedInIcon />
								</a>
								{/* <a href="tel:+380 (98) 157 68 90">
                  <PhoneIcon />
                </a> */}
								{/* <a
                  target="_blank"
                  href="https://instagram.com/towardslife2.0"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a> */}
								<a
									target='_blank'
									href='https://www.facebook.com/bftowardslife'
									rel='noreferrer'>
									<FacebookIcon />
								</a>
								<a
									target='_blank'
									href='https://t.me/nazustrichzhittyu'
									rel='noreferrer'>
									<TelegramIcon />
								</a>
								{/* <a target="_blank"  href="https://twitter.com/nazustrichzhit1">
                                            <TwitterIcon/>
                                        </a> */}
							</div>
						) : (
							<div
								style={{ float: "right" }}
								onClick={() =>
									setMenuOpened((prevState) => !prevState)
								}>
								{menuOpened ? <CloseIcon /> : <MenuIcon />}
							</div>
						)}
						{menuOpened && (
							<>
								<div className={classes.menu}>
									<NavHashLink smooth to='/#aboutUs'>
										<FormattedMessage id='navbar.whoAreWe' />
									</NavHashLink>
									<NavHashLink smooth to='/#howToHelp'>
										<FormattedMessage id='navbar.howToHelp' />
									</NavHashLink>
									{/* <Link to="/projects">ПРОЕКТЫ</Link> */}
									<Link to='/contacts'>
										<FormattedMessage id='navbar.contacts' />
									</Link>
								</div>
								<div className={classes.socialIconsBlock}>
									<a
										target='_blank'
										href='https://www.linkedin.com/company/nazustrichzhittyu'
										rel='noreferrer'>
										<LinkedInIcon width='30' height='30' />
									</a>
									{/* <a href="tel:+380 (98) 157 68 90">
                    <PhoneIcon width="30" height="30" />
                  </a> */}
									{/* <a
                    target="_blank"
                    href="https://instagram.com/towardslife2.0"
                    rel="noreferrer"
                  >
                    <InstagramIcon width="30" height="30" />
                  </a> */}
									<a
										target='_blank'
										href='https://www.facebook.com/bftowardslife'
										rel='noreferrer'>
										<FacebookIcon width='30' height='30' />
									</a>
									<a
										target='_blank'
										href='https://t.me/nazustrichzhittyu'
										rel='noreferrer'>
										<TelegramIcon width='30' height='30' />
									</a>
									{/* <a
                    target="_blank"
                    href="https://twitter.com/nazustrichzhit1"
                    rel="noreferrer"
                  >
                    <TwitterIcon width="30" height="30" />
                  </a> */}
								</div>
							</>
						)}
					</Container>
				</Toolbar>
				{!menuOpened && (
					<Toolbar className={classes.subMain}>
						<Container
							className={`${classes.subMain} ${classes.sub}`}
							maxWidth='md'>
							<NavHashLink
								smooth
								to='/#header'
								className={classes.logo}>
								<img src={LogoImg} alt='' />
							</NavHashLink>
							{matches && (
								<div className={classes.menu}>
									<NavHashLink smooth to='/#aboutUs'>
										<FormattedMessage id='navbar.whoAreWe' />
									</NavHashLink>
									<NavHashLink smooth to='/#howToHelp'>
										<FormattedMessage id='navbar.howToHelp' />
									</NavHashLink>
									{/* <Link to="/projects">ПРОЕКТЫ</Link> */}
									<Link to='/contacts'>
										<FormattedMessage id='navbar.contacts' />
									</Link>
								</div>
							)}
							<a
								style={{ textDecoration: "none" }}
								target='_blank'
								rel='noreferrer'
								// href={createOrder("", "ПОЖЕРТВОВАТЬ")}
								href={link}>
								<Button
									variant='outline'
									width={matches ? "270px" : "130px"}>
									<FormattedMessage id='navbar.pay' />
								</Button>
							</a>
						</Container>
					</Toolbar>
				)}
			</AppBar>
		</>
	);
};

export default InfoNav;
