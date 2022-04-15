import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useStyles } from "./styles";

import Button from "../../components/Button";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import LineBg from "../../components/LineBg";

const ContainerAbout = () => {
  const classes = useStyles();

  return (
    <div id="aboutUs" className={classes.wrapper}>
      <LineBg color="#EBF8FF" />
      <Container maxWidth="md">
        <Title title="БФ „Назустріч життю“" />
        <SubTitle
          title={
            <>
              работает в сфере охраны здоровья <br /> и социальной защиты
            </>
          }
        />
        <Grid container>
          <Grid item xs={12} md={6}>
            Фонд основан 22 апреля 2015 года группой <span>студентов ЗНТУ</span>
            .
            <br />
            <br />
            На момент создания у нас было 2 направления с несколькими успешными
            проектами:
            <br />
            <br />
            <span>1.Экология</span>
            <br />
            <span>2.Помощь детям</span>
            <br />
            <br />
            Из-за слишком молодого состава и отсутствия опыта, работу фонда
            пришлось остановить.
          </Grid>
          <Grid item xs={12} md={6}>
            В 2022 году <span>Россия вторглась в Украину</span>. И все, кто
            ранее был в фонде, начали <span>волонтерить</span>: помогать кто чем
            может нашим защитникам и пострадавшим мирным жителям.
            <br />
            <br />
            На этой почве, фонд <span>восстановил</span> свою{" "}
            <span>работу</span> дабы помочь большему количеству людей.
            <br />
            <br />
            <br />
            <br />
            <span>Вместе мы сила</span> 💪 🇺🇦
          </Grid>
          <Grid container justifyContent="center">
            <div className={classes.button}>
              {/* <Button to="/projects" variant="primary">НАШИ ПРОЕКТЫ</Button> */}
              <Button variant="primary" disabled="true">
                НАШИ ПРОЕКТЫ
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerAbout;
