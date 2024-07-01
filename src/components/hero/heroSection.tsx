import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { content } from "../../content/content";
import '@fontsource/press-start-2p'; 

const HeroSection: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <Box
      sx={{
        backgroundImage: `url(${content.heroSection.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: `${content.heroSection.imageHeight}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        pb: 6
      }}
    >
      <Container>
        {content.heroSection.mainTitle && (
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ fontFamily: `${content.heroSection.mainTitleFontStyle}`, color: `${content.heroSection.mainTitleFontColor}`, boxShadow: '20' }}
          >
            {content.heroSection.mainTitle}
          </Typography>
        )}
        {content.heroSection.subTitle && (
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontFamily: `${content.heroSection.subTitleFontStyle}`, 
              color: isButtonHovered ? `${content.heroSection.subTitleHoverColor}` : `${content.heroSection.subTitleHoverColorAlt}`  
            }}
          >
            {content.heroSection.subTitle}
          </Typography>
        )}
        {content.heroSection.buttonText && (
          <Button 
            sx={{
              fontSize: '1.5rem',  
              padding: '0.5rem 1rem', 
              backgroundColor: isButtonHovered ? `${content.heroSection.buttonTextHoverColor}` : `${content.heroSection.buttonTextHoverColorAlt}`,  
              '&:hover': {
                backgroundColor: `${content.heroSection.buttonTextBackgroundColor}`, 
              },
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            <a 
              href={`tel:${content.footerSection.phoneNumber}`} 
              style={{ 
                textDecoration: 'none', 
                color: `${content.heroSection.buttonTextFontColor}`, 
                fontFamily: `${content.heroSection.buttonTextFontStyle}`
              }}
            >
              {content.heroSection.buttonText}
            </a>
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default HeroSection;
