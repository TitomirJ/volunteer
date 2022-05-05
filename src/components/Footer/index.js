import React, { useContext } from "react";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { FormattedMessage } from "react-intl";

import AppContext from "./../../context/AppContext.jsx";

import Button from "../Button";
import LinkedInIcon from "../../assests/icons/LinkedInIcon";
import FacebookIcon from "../../assests/icons/FacebookIcon";
import TelegramIcon from "../../assests/icons/TelegramIcon";
import LogoImg from "../../assests/images/Logo.png";
import { useStyles } from "./styles";
import { fontWeight, margin } from "@mui/system";

const Footer = () => {
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
	const matches = useMediaQuery("(min-width:1025px)");
	const xsDevice = useMediaQuery("(max-width:480px)");

	return (
		<div className={classes.footer}>
			<Container maxWidth='md'>
				<Grid
					container
					alignItems='center'
					justifyContent='space-between'>
					<NavHashLink smooth to='/#header' className={classes.logo}>
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
							{/* <Link to='/documents'>
								<FormattedMessage id='docs' />
							</Link> */}
						</div>
					)}
					{/* <Grid
						alignItems='center'
						justifyContent='center'
						item
						xs={5}
						gap={3}
						container> */}

					<a
						style={{ textDecoration: "none" }}
						target='_blank'
						rel='noreferrer'
						// href={createOrder("", "ПОЖЕРТВОВАТЬ")}
						href={link}>
						<Button
							variant='outline'
							fontSize={!matches && "10px"}
							width={matches ? "270px" : "130px"}>
							<FormattedMessage id='navbar.pay' />
						</Button>
					</a>
					{/* </Grid> */}
				</Grid>
				<Grid
					container
					alignItems='center'
					justifyContent='space-between'
					style={{ marginTop: "30px" }}>
					<a
						href='tel:+380 (98) 157 68 90'
						className={classes.linksToContact}>
						+380 (98) 157 68 90
					</a>

					{!xsDevice && (
						<a
							href='mailto:bfIlovelife@gmail.com'
							className={classes.linksToContact}>
							bfIlovelife@gmail.com
						</a>
					)}
					<Link
						style={{
							color: "white",
							marginRight: "12px",
							fontWeight: "bold",
						}}
						to='/documents'
						variant='outline'
						fontSize={!matches && "10px"}
						width={matches ? "270px" : "130px"}>
						<FormattedMessage id='docs' />
					</Link>
					{matches && (
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
							{/* <a target="_blank"  href="https://instagram.com/towardslife2.0">
                                <InstagramIcon/>
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

							{/* <a target="_blank" href="https://twitter.com/nazustrichzhit1">
                <TwitterIcon />
              </a> */}
						</div>
					)}
				</Grid>
			</Container>
		</div>
	);
};

export default Footer;
