import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NavHashLink } from "react-router-hash-link";

import Title from "../../components/Title";
import Button from "../../components/Button";
import CardIcon from "../../assests/icons/CardIcon";
import LineBg from "../../components/LineBg";
import { useStyles } from "./styles";

const ContainerHowToHelp = () => {
  const classes = useStyles();

  function createOrder(amount, order_desc) {
    var button = window?.$ipsp.get("button");
    button.setMerchantId(1396424);
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

  return (
    <div id="howToHelp" className={classes.container}>
      <LineBg color="rgb(255 242 175)" />
      <Container maxWidth="md">
        <Title title="как помочь" />
        <Grid container spacing={4} style={{ marginTop: "60px" }}>
          <Grid item xs={12} md={4}>
            <div className={classes.block}>
              <h4>финансовая поддержка</h4>
              <p style={{ marginBottom: "20px" }}>
                Перевести средства на Закупки, для нужд Украинской армии
              </p>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noreferrer"
                href={createOrder("", "ПОЖЕРТВОВАТЬ")}
              >
                <Button variant="primary">ПОЖЕРТВОВАТЬ</Button>
              </a>

              {/* <Button to="/projects" style={{margin: "33px 0"}} variant="outline">помогите нам собрать средства на...</Button> */}
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                style={{ cursor: "pointer" }}
              >
                <CardIcon />
                <NavHashLink
                  style={{ color: "white", textDecoration: "none" }}
                  smooth
                  to="/contacts/#requisites"
                >
                  <p style={{ fontWeight: 700, marginLeft: "16px" }}>
                    НАШИ РЕКВИЗИТЫ
                  </p>
                </NavHashLink>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.block}>
              <h4>Украинская Армия нуждается в следующем</h4>
              <ul>
                <li>Бронежилеты</li>
                <li>Разгрузки</li>
                <li>Рации</li>
                <li>Каски</li>
                <li>Наколенники</li>
                <li>Тактические перчатки,очки,обувь</li>
                <li>Тепловизеры</li>
                <li>Дроны</li>
              </ul>
              <NavHashLink
                style={{ color: "white", textDecoration: "none" }}
                smooth
                to="/contacts/#requisites"
              >
                <Button variant="yellowPrimary">ПОМОЧЬ</Button>
              </NavHashLink>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.block}>
              <h4>
                стать <br /> волонтером
              </h4>
              <ul>
                <span>
                  “Стать Волонтером” - это просто. Помогай Украине тем, что
                  умеешь делать лучше всего, присоединяйся к нашей команде ради
                  общей цели! Вместе к победе!{" "}
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
                style={{ color: "white", textDecoration: "none" }}
                smooth
                to="/contacts"
              >
                <Button variant="primary">ПРИСОЕДИНИТЬСЯ</Button>
              </NavHashLink>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerHowToHelp;
