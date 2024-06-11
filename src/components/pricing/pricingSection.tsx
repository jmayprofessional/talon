import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { content } from "../../content/content";

const PricingSection: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ pb: 6 }}>
      {content.pricingSection.services.map((service, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <PricingCard service={service} />
        </Grid>
      ))}
    </Grid>
  );
};

const PricingCard: React.FC<{ service: any }> = ({ service }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="200"
        image={service.serviceImage}
        alt={service.serviceTitle}
      />
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Typography variant="h5" component="div" gutterBottom>
            {service.serviceTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {service.content}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PricingSection;
