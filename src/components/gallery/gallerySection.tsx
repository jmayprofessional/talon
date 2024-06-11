import React from "react";
import { Grid, Card, CardMedia, Typography, Box } from "@mui/material";
import { content } from "../../content/content";

const GallerySection: React.FC = () => {
  return (
    <Box sx={{ pb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: "'ABeeZee', sans-serif", pt: 4, color: "#2D2C23"}}>
        Photo Gallery of Dreams
      </Typography>
      <Grid container spacing={2}>
        {content.gallerySection.gallery.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <GalleryImage item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const GalleryImage: React.FC<{ item: any }> = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
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
