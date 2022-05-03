import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import InfoNav from "../../components/InfoNav";
import LineBg from "../../components/LineBg";
import Title from "../../components/Title";
import PhoneIcon from "../../assests/icons/PhoneIcon";
import EmailIcon from "../../assests/icons/EmailIcon";
import ContainerSocial from "../../containers/ContainerSocial";
import SubTitle from "../../components/SubTitle";
import ClockIcon from "../../assests/icons/ClockIcon";
import Footer from "../../components/Footer";
import UkrainianFlagIcon from "../../assests/icons/UkrainianFlagIcon";
import EarthIcon from "../../assests/icons/EarthIcon";

import { FormattedMessage } from "react-intl";

import { useStyles } from "./styles";

const Contacts = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InfoNav />
      <main style={{ margin: "195px 0 140px" }}>
        <div style={{ position: "relative", padding: "2px 0 0" }}>
          <LineBg color='#FFFAE1' />
          <Container maxWidth='md'>
            <Title title={<FormattedMessage id='contactInfo.title' />} />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className={classes.block}>
                  <PhoneIcon width='60' height='60' color='#FFF8D1' />
                  <a href='tel:+380 (98) 157 68 90'>+380 (98) 157 68 90</a>
                  <span>
                    <FormattedMessage id='phone' />
                  </span>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className={classes.block}>
                  <EmailIcon width='60' height='60' color='#FFF8D1' />
                  <a href='mailto:bfIlovelife@gmail.com'>
                    bfIlovelife@gmail.com
                  </a>
                  <span>e-mail</span>
                </div>
              </Grid>
            </Grid>
          </Container>
          <ContainerSocial />
          <Container className={classes.schedule} maxWidth='md'>
            <SubTitle title={<FormattedMessage id='schedule' />} />
            <ClockIcon />
            <p>
              <FormattedMessage id='schedule.time' />
            </p>
          </Container>
          <div
            id='requisites'
            style={{ position: "relative", padding: "2px 0 0" }}
          >
            <Title title={<FormattedMessage id='requisites' />} />
            <LineBg color='#FFFAE1' />
            <Container className={classes.requisites} maxWidth='md'>
              <div>
                <UkrainianFlagIcon />
                <p>
                  <FormattedMessage id='payment' />
                </p>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <p>
                  <FormattedMessage id='payment1' /> <br />
                  <FormattedMessage id='payment2' /> <br />
                  <br />
                  <a
                    href='https://send.monobank.ua/jar/79GfPJRKqz'
                    style={{ color: "blue" }}
                  >
                    <FormattedMessage id='mono' /> {""}
                  </a>
                  <FormattedMessage id='payment3' />
                  <br />
                  <br />
                  <FormattedMessage id='payment4' />
                  <br />
                  <FormattedMessage id='payment5' />
                  <br />
                </p>
              </div>
              <div>
                <EarthIcon width='34' />
                <p>
                  <FormattedMessage id='payment6' />
                </p>
              </div>
              <div>
                <p>
                  Company details (USD)
                  <br />
                  <br />
                  Company address: Ukraine, 69071, flat 50, Parhomenko 4 street,
                  Zaporizhzhya
                  <br />
                  IBAN Code: UA783133990000026002030202244
                  <br />
                  Name of the bank:JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR.,
                  KYIV, 01001, UKRAINE Bank SWIFT Code: PBANUA2X
                  <br />
                  Bank SWIFT Code: PBANUA2X
                  <br />
                  <br />
                  Correspondent banks:
                  <br />
                  <br />
                  1. Account in the correspondent bank: 001-1-000080
                  <br />
                  SWIFT Code of the correspondent bank: CHASUS33
                  <br />
                  Correspondent bank: JP Morgan Chase Bank, New York ,USA
                  <br />
                  2. Account in the correspondent bank:890-0085-754
                  <br />
                  SWIFT Code of the correspondent bank: IRVT US 3N
                  <br />
                  Correspondent bank: The Bank of New York Mellon, New York, USA
                  <br />
                  <br />
                  Company details (Euro)
                  <br />
                  <br />
                  Company address: Ukraine, 69071, flat 50, Parhomenko 4 street,
                  Zaporizhzhya
                  <br />
                  IBAN Code: UA513133990000026001010201073
                  <br />
                  Name of the bank: JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR.,
                  KYIV, 01001, UKRAINE
                  <br />
                  Bank SWIFT Code: PBANUA2X
                  <br />
                  <br />
                  Correspondent banks:
                  <br />
                  <br />
                  1. Account in the correspondent bank: 400886700401
                  <br />
                  SWIFT Code of the correspondent bank: COBADEFF
                  <br />
                  Correspondent bank: Commerzbank AG, Frankfurt am Main, Germany
                  <br />
                  2. Account in the correspondent bank: 6231605145
                  <br />
                  SWIFT Code of the correspondent bank: CHASDEFX
                  <br />
                  Correspondent bank: J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY
                  <br />
                  <br />
                  Crypto
                  <br />
                  <br />
                  BTC: 1NLT946RhSmhj3PdvfDUaJVbjXBMZuycLG
                  <br />
                  ETH: 0x913f53d1216f7c6bca584a95b87f2a6d0d926bea
                  <br />
                  USDT (Tron): TD7YW1FwUf5CRrQi792ihC54hj7zhavSvg
                  <br />
                </p>
              </div>
            </Container>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contacts;
