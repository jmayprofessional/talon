import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { content } from "../../content/content";

const PricingSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${content.pricingSection.servicesBackgroundImage})`, // Replace '/path/to/backgroundImage.jpg' with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px", // Increase the minHeight to make it bigger
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <Grid container spacing={2}>
        {content.pricingSection.services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <PricingCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const PricingCard: React.FC<{ service: any }> = ({ service }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={service.serviceImage}
        alt={service.serviceTitle}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {service.serviceTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {service.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PricingSection;
