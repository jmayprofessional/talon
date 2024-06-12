import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { content } from "../../content/content";
import '@fontsource/press-start-2p';  // Ensure this is imported

const HeroSection: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

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
        pb: 6
      }}
    >
      <Container>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ fontFamily: "'Press Start 2P', system-ui", color: "#2D2C23", boxShadow: '20' }}
        >
          {content.heroSection.mainTitle}
        </Typography>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontFamily: "'ABeeZee', sans-serif", 
            color: isButtonHovered ? "orange" : "purple"  // Change text color based on button hover
          }}
        >
          {content.heroSection.subTitle}
        </Typography>
        <Button 
          color="inherit" 
          sx={{
            fontSize: '1.5rem',  // Adjust this value as needed
            padding: '0.5rem 1rem', // Optional: Adds some padding around the button
            backgroundColor: isButtonHovered ? 'purple' : '#F6832A',  // Change background color based on hover state
            '&:hover': {
              backgroundColor: 'purple', // Change background color on hover
            },
          }}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <a 
            href={`tel:${content.footerSection.phoneNumber}`} 
            style={{ 
              textDecoration: 'none', 
              color: 'white', 
              fontFamily: "'Press Start 2P', system-ui"
            }}
          >
            Book Your Trip NOW!
          </a>
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
