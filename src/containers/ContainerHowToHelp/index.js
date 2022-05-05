import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NavHashLink } from "react-router-hash-link";

import Title from "../../components/Title";
import Button from "../../components/Button";
import CardIcon from "../../assests/icons/CardIcon";
import LineBg from "../../components/LineBg";
import { FormattedMessage } from "react-intl";

import AppContext from "./../../context/AppContext.jsx";

import { useStyles } from "./styles";

const ContainerHowToHelp = () => {
	const classes = useStyles();

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

	function runWfpWdgt(url) {
		var wayforpay = new window.Wayforpay();
		wayforpay.invoice(url);
	}

	return (
		<div id='howToHelp' className={classes.container}>
			<LineBg color='rgb(255 242 175)' />
			<Container maxWidth='md'>
				<Title title={<FormattedMessage id='howToHelp' />} />
				<Grid container spacing={4} style={{ marginTop: "60px" }}>
					<Grid item xs={12} md={4}>
						<div className={classes.block}>
							<h4>
								<FormattedMessage id='howToHelp1' />
							</h4>
							<p style={{ marginBottom: "20px" }}>
								<FormattedMessage id='howToHelp2' />
							</p>
							<a
								style={{ textDecoration: "none" }}
								target='_blank'
								rel='noreferrer'
								// href={createOrder("", "ПОЖЕРТВОВАТЬ")}>
								href={link}>
								<Button variant='primary'>
									<FormattedMessage id='howToHelp3' />
								</Button>
							</a>

							{/* <Button to="/projects" style={{margin: "33px 0"}} variant="outline">помогите нам собрать средства на...</Button> */}
							<Grid
								container
								alignItems='center'
								justifyContent='center'
								style={{ cursor: "pointer" }}>
								<CardIcon />
								<NavHashLink
									style={{
										color: "white",
										textDecoration: "none",
									}}
									smooth
									to='/contacts/#requisites'>
									<p
										style={{
											fontWeight: 700,
											marginLeft: "16px",
										}}>
										<FormattedMessage id='howToHelp4' />
									</p>
								</NavHashLink>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.block}>
							<h4>
								<FormattedMessage id='howToHelp5' />
							</h4>
							<ul>
								<li>
									<FormattedMessage id='howToHelp6' />
								</li>
								<li>
									<FormattedMessage id='howToHelp7' />
								</li>
								<li>
									<FormattedMessage id='howToHelp8' />
								</li>
								<li>
									<FormattedMessage id='howToHelp9' />
								</li>
								<li>
									<FormattedMessage id='howToHelp10' />
								</li>
								<li>
									<FormattedMessage id='howToHelp11' />
								</li>
								{/* <li>
                  <FormattedMessage id="howToHelp12" />
                </li> */}
								{/* <li>
                  <FormattedMessage id="howToHelp13" />
                </li> */}
							</ul>
							{/* <NavHashLink
								style={{
									color: "white",
									textDecoration: "none",
								}}
								smooth
								to='/contacts/#requisites'> */}
							{/* <a
								style={{ textDecoration: "none" }}
								href='https://secure.wayforpay.com/button/b3f4980e74803'> */}
							<Button
								variant='yellowPrimary'
								onClick={() =>
									runWfpWdgt(
										"https://secure.wayforpay.com/button/b3f4980e74803"
									)
								}>
								<FormattedMessage id='howToHelp14' />
							</Button>
							{/* </a> */}

							{/* </NavHashLink> */}
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.block}>
							<h4>
								<FormattedMessage id='howToHelp15' /> <br />{" "}
								<FormattedMessage id='howToHelp16' />
							</h4>
							<ul>
								<span>
									<FormattedMessage id='howToHelp17' />{" "}
								</span>
								{/*<span>помощь нужна</span> самая разная. все зависит от вашего{" "}*/}
								{/*<span>желания</span> и свободного <span>времени</span>:*/}
								{/*<li>репосты</li>*/}
								{/*<li>расспространение информации</li>*/}
								{/*<li>сбор гуманитарной помощи</li>*/}
								{/*<li>физическая помощь</li>*/}
								{/*<li>поиск финансов</li>*/}
								{/*<li>*/}
								{/*  помощь, исходя из ваших навыков (сварщик, швея, водитель ...)*/}
								{/*</li>*/}
								{/* <li>ваш вариант</li> */}
							</ul>
							<NavHashLink
								style={{
									color: "white",
									textDecoration: "none",
								}}
								smooth
								to='/contacts'>
								<Button variant='primary'>
									<FormattedMessage id='howToHelp18' />
								</Button>
							</NavHashLink>
						</div>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default ContainerHowToHelp;
