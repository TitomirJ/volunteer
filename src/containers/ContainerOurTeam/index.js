import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Title from "../../components/Title";
import TeamMemberOne from "../../assests/images/IMG_4558.JPG";
import TeamMemberTwo from "../../assests/images/IMG_4559.PNG";
import TeamMemberThree from "../../assests/images/photo_2022-03-28_13-05-16.jpg";
import TeamMemberFour from "../../assests/images/photo_2022-03-28_13-48-01.jpg";
import Button from "../../components/Button";
import LineBg from "../../components/LineBg";
import CustomizedDialogs from "../../components/Modal/Modal";

import { FormattedMessage } from "react-intl";

import { useStyles } from "./styles";

const ContainerOurTeam = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", padding: "2px 0" }}>
      <CustomizedDialogs
        title={title}
        body={body}
        handleClose={handleClose}
        open={open}
      />
      <LineBg color="#FFFAE1" />
      <Container
        maxWidth="md"
        style={{ marginTop: "57px", marginBottom: "140px" }}
      >
        <Title title={<FormattedMessage id="ourTeam.title" />} />
        <Grid container spacing={4} style={{ marginTop: "60px" }}>
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            xs={12}
            md={6}
            lg={3}
          >
            <div
              className={classes.blockImg}
              style={{ backgroundImage: `url(${TeamMemberOne})` }}
            />
            <Button
              variant="outlinePrimary"
              onClick={() => (
                handleClickOpen(),
                setTitle(<FormattedMessage id="fullName1" />),
                setBody(<FormattedMessage id="roles.person1" />)
              )}
            >
              <FormattedMessage id="name1" /> <br />{" "}
              <FormattedMessage id="surname1" />
            </Button>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            xs={12}
            md={6}
            lg={3}
          >
            <div
              className={classes.blockImg}
              style={{ backgroundImage: `url(${TeamMemberTwo})` }}
            />
            <Button
              variant="outlinePrimary"
              onClick={() => (
                handleClickOpen(),
                setTitle(<FormattedMessage id="fullName2" />),
                setBody(<FormattedMessage id="roles.person2" />)
              )}
            >
              <FormattedMessage id="name2" /> <br />{" "}
              <FormattedMessage id="surname2" />
            </Button>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            xs={12}
            md={6}
            lg={3}
          >
            <div
              className={classes.blockImg}
              style={{ backgroundImage: `url(${TeamMemberThree})` }}
            />
            <Button
              variant="outlinePrimary"
              onClick={() => (
                handleClickOpen(),
                setTitle(<FormattedMessage id="fullName3" />),
                setBody(<FormattedMessage id="roles.person3" />)
              )}
            >
              <FormattedMessage id="name3" /> <br />{" "}
              <FormattedMessage id="surname3" />
            </Button>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            item
            xs={12}
            md={6}
            lg={3}
          >
            <div
              className={classes.blockImg}
              style={{ backgroundImage: `url(${TeamMemberFour})` }}
            />
            <Button
              variant="outlinePrimary"
              onClick={() => (
                handleClickOpen(),
                setTitle(<FormattedMessage id="fullName4" />),
                setBody(<FormattedMessage id="roles.person4" />)
              )}
            >
              <FormattedMessage id="name4" /> <br />{" "}
              <FormattedMessage id="surname4" />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContainerOurTeam;
