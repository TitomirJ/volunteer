import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FormattedMessage } from "react-intl";

import Button from "../../components/Button";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import LineBg from "../../components/LineBg";

import { useStyles } from "./styles";

const ContainerAbout = () => {
  const classes = useStyles();

  return (
    <div id='aboutUs' className={classes.wrapper}>
      <LineBg color='#EBF8FF' />
      <Container maxWidth='md'>
        <Title title={<FormattedMessage id='fondTitle' />} />
        <SubTitle
          title={
            <>
              <FormattedMessage id='titleDescription1' /> <br />
              <FormattedMessage id='titleDescription2' />
            </>
          }
        />
        <Grid container>
          <Grid item xs={12} md={6}>
            <FormattedMessage id='secondBlock.title1' />{" "}
            <span>
              <FormattedMessage id='secondBlock.title2' />
            </span>
            .
            <br />
            <br />
            <FormattedMessage id='secondBlock.text1' />
            <br />
            <br />
            <span>
              <FormattedMessage id='secondBlock.text2' />
            </span>
            <br />
            <span>
              <FormattedMessage id='secondBlock.text3' />
            </span>
            <br />
            <br />
            {/* <FormattedMessage id='secondBlock.text4' /> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <FormattedMessage id='secondBlock.text5' />{" "}
            <span>
              <FormattedMessage id='secondBlock.text6' />.
            </span>
            {/* <span>
              <FormattedMessage id="secondBlock.text8" />
            </span> */}
            {/* <FormattedMessage id="secondBlock.text9" /> */}
            <br />
            <br />
            <FormattedMessage id='secondBlock.text7' />.
            <span>{/* <FormattedMessage id='secondBlock.text11' /> */}</span>{" "}
            {/* <FormattedMessage id='secondBlock.text12' />{" "} */}
            <span>
              {/* <FormattedMessage id='secondBlock.text13' /> */}
            </span>{" "}
            {/* <FormattedMessage id='secondBlock.text14' /> */}
            <br />
            <br />
            <br />
            <br />
            {/* <span>
              <FormattedMessage id='secondBlock.text15' />
            </span>{" "} */}
            {/* 💪 🇺🇦 */}
          </Grid>
          {/*<Grid container justifyContent='center'>*/}
          {/*  <div className={classes.button}>*/}
          {/*    /!* <Button to="/projects" variant="primary">НАШИ ПРОЕКТЫ</Button> *!/*/}
          {/*    <Button variant='primary' disabled={true}>*/}
          {/*      <FormattedMessage id='secondBlock.ourProjects' />*/}
          {/*    </Button>*/}
          {/*  </div>*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerAbout;
