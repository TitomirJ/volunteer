import React from "react";
import HeaderBg from "../../assests/images/HeaderBg.png";
import Button from "../../components/Button";

import { FormattedMessage } from "react-intl";

import { useStyles } from "./styles";

const Header = () => {
	const classes = useStyles();

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
		<div
			id='header'
			className={classes.header}
			style={{ backgroundImage: `url(${HeaderBg})` }}>
			<h1 className={classes.title}>
				<FormattedMessage id='firstBlock.bigTitle1' />
				<br />
				<span>
					<FormattedMessage id='firstBlock.bigTitle2' />
				</span>
			</h1>
			<div className={classes.blocksWrapper}>
				<div className={classes.block}>
					<h2>
						<FormattedMessage id='Kv' />
					</h2>
					<ul>
						<li>
							<FormattedMessage id='needsKv1' />
						</li>
						<li>
							<FormattedMessage id='needsKv2' />
						</li>
						{/* <li>
              <FormattedMessage id="needsKv3" />
            </li> */}
					</ul>
					<div className={classes.blockButton}>
						{/* <a
							style={{ textDecoration: "none" }}
							target='_blank'
							rel='noreferrer'
							// href={createOrder("", "ПОЖЕРТВОВАТЬ")}>
							href='https://secure.wayforpay.com/button/b3f4980e74803'> */}
						{/* <Button
							variant='yellowPrimary'
							onClick={() =>
								runWfpWdgt(
									"https://secure.wayforpay.com/button/b3f4980e74803"
								)
							}>
							<FormattedMessage id='help' />
						</Button> */}
						{/* </a> */}
					</div>
				</div>
				<div className={classes.block}>
					<h2>
						<FormattedMessage id='Zp' />
					</h2>
					<ul>
						<li>
							<FormattedMessage id='needsZp1' />
						</li>
						<li>
							<FormattedMessage id='needsZp2' />
						</li>
						<li>
							<FormattedMessage id='needsZp3' />
						</li>
					</ul>
					<div className={classes.blockButton}>
						{/* <a
							style={{ textDecoration: "none" }}
							target='_blank'
							rel='noreferrer'
							// href={createOrder("", "ПОЖЕРТВОВАТЬ")}>
							href='https://secure.wayforpay.com/button/b3f4980e74803'> */}
						{/* <Button
							variant='primary'
							onClick={() =>
								runWfpWdgt(
									"https://secure.wayforpay.com/button/b3f4980e74803"
								)
							}>
							<FormattedMessage id='help' />
						</Button> */}
						{/* </a> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
