import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { content } from "../../content/content";
import '@fontsource/press-start-2p';  // Ensure this is imported

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${content.heroSection.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        pb: 6 // Add padding bottom
      }}
    >
      <Container>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ fontFamily: "'Press Start 2P', system-ui", color: "purple" }}
        >
          {content.heroSection.mainTitle}
        </Typography>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ fontFamily: "'ABeeZee', sans-serif" }}
        >
          {content.heroSection.subTitle}
        </Typography>
        <Button variant="contained" color="primary" href="#pricing">
          Book Your Trip NOW!
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
