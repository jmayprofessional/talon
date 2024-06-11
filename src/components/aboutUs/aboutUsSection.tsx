import React from "react";
import { Grid, Typography, Card, CardMedia } from "@mui/material";
import { content } from "../../content/content"

const AboutUsSection: React.FC = () => {
  return (
    <Grid container spacing={6} sx={{pb: 6 }}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="100%"
            image={content.aboutUsSection.aboutUsImage}
            alt={content.aboutUsSection.mainTitle}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {content.aboutUsSection.mainTitle}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {content.aboutUsSection.subTitle}
        </Typography>
        <Typography variant="body1" paragraph>
          {content.aboutUsSection.contentSlot1}
        </Typography>
        <Typography variant="body1" paragraph>
          {content.aboutUsSection.contentSlot2}
        </Typography>
        <Typography variant="body1" paragraph>
          {content.aboutUsSection.contentSlot3}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUsSection;
