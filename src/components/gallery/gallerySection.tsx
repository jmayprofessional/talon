import React from "react";
import { Grid, Card, CardMedia, Typography, Box } from "@mui/material";
import { content } from "../../content/content";

const GallerySection: React.FC = () => {
  return (
    <Box sx={{ pb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: `${content.gallerySection.galleryTitleFontStyle}`, pt: 4, color: `${content.gallerySection.galleryTitleFontColor}`}}>
        {content.gallerySection.galleryTitle}
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
    <Card
      sx={{
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: `${content.gallerySection.galleryImageBoxShadowColor}`, 
        },
      }}
    >
      <CardMedia
        component="img"
        height={`${content.gallerySection.galleryImageHeight}`}
        image={item.galleryImage}
        alt={item.caption}
      />
      <Typography variant="body2" color="textSecondary" sx={{ p: 2 }}>
        {item.caption}
      </Typography>
    </Card>
  );
};

export default GallerySection;
