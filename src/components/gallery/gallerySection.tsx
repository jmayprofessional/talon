import React from "react";
import { Grid, Card, CardMedia, Typography } from "@mui/material";
import { content } from "../../content/content";

const GallerySection: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ pb: 6, pt: 6 }}>
      {content.gallerySection.gallery.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <GalleryImage item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

const GalleryImage: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="auto" // Change height to "auto" for dynamic sizing
        width="100%" // Set width to "100%" for full-width images
        image={item.galleryImage}
        alt={item.caption}
      />
      <Typography variant="body2" color="textSecondary">
        {item.caption}
      </Typography>
    </Card>
  );
};

export default GallerySection;
