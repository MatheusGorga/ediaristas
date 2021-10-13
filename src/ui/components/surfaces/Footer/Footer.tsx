import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "500px" }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            optio dolorum animi ducimus labore explicabo quaerat, earum totam
            commodi ad mollitia delectus incidunt quisquam! Commodi, nam alias.
            Itaque, cumque voluptatum!
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos aplicativos </FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"app-store"} />
              </a>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/google-play.png"} alt={"google-play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
