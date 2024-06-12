import React from "react";
import { Grid, Link, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { content } from "../../content/content";
import facebookLogo from '../../assets/facebookLogo.png';
import instaLogo from '../../assets/instaLogo.webp';


const FooterSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ pb: 6, pt: 6, bgcolor: '#2D2C23', textAlign: 'center' }}>
      <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', p: isMobile ? 2 : 0 }}>
            <Typography variant={isMobile ? "h5" : "h4"} gutterBottom sx={{ color: 'white' }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ color: '#F6832A', fontFamily: "'ABeeZee', sans-serif", mb: 1 }}>
              Phone: <Link href={`tel:${content.footerSection.phoneNumber}`} sx={{ color: 'purple', textDecoration: 'none' }}>{content.footerSection.phoneNumber}</Link>
            </Typography>
            <Typography variant="body1" sx={{ pb: 2, color: '#F6832A', fontFamily: "'ABeeZee', sans-serif" }}>
              Location: {content.footerSection.location}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <iframe
                title="Google Maps"
                src={content.footerSection.googleMapsLink}
                width={isMobile ? "100%" : "450rem"}
                height="300rem"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ textAlign: 'center', color: 'white', textDecoration: 'none', p: isMobile ? 2 : 0 }}>
            <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={facebookLogo} alt="Facebook" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
              <Link href={content.footerSection.facebookLink} target="_blank" rel="noopener" sx={{ color: '#F6832A', textDecoration: 'none', fontFamily: "'ABeeZee', sans-serif" }}>
                Facebook
              </Link>
            </Typography>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={instaLogo} alt="Instagram" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
              <Link href={content.footerSection.instagramLink} target="_blank" rel="noopener" sx={{ color: '#F6832A', textDecoration: 'none', fontFamily: "'ABeeZee', sans-serif" }}>
                Instagram
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterSection;
