import React, { useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { content } from "../../content/content";

const PricingSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${content.pricingSection.servicesBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
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
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={service.serviceImage}
        alt={service.serviceTitle}
      />
      <CardContent sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {service.serviceTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {service.content}
        </Typography>
      </CardContent>
      {hovered && (
        <Box
          sx={{
            position: "absolute",
            top: 200, 
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(246, 131, 42, 0.8)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '4rem' }}>{service.price}</Typography>
        </Box>
      )}
    </Card>
  );
};

export default PricingSection;
