import React from "react";
import { Grid, Link, Typography, Box } from "@mui/material";
import { content } from "../../content/content";

const FooterSection: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ pb: 6, pt: 6, justifyContent: 'space-evenly', bgcolor: '#2D2C23' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'white'}}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ color: '#F6832A'}}>
            Phone: {content.footerSection.phoneNumber}
          </Typography>
          <Typography variant="body2" sx={{ pb: 2, color: '#F6832A'}}>
            Location: {content.footerSection.location}
          </Typography>
          <iframe
            title="Google Maps"
            src={content.footerSection.googleMapsLink}
            width="350"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box sx={{ textAlign: 'center', color: 'white', textDecoration: 'none'}}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Link href={content.footerSection.facebookLink} target="_blank" rel="noopener" sx={{ color: '#F6832A', textDecoration: 'none' }}>
            Facebook
          </Link>
          <br />
          <Link href={content.footerSection.instagramLink} target="_blank" rel="noopener" sx={{ color: '#F6832A', textDecoration: 'none' }}>
            Instagram
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FooterSection;
