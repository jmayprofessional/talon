import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { content } from "../../content/content"

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#F6832A' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: "'Press Start 2P', system-ui", color: "white", marginLeft: '25rem' }}>
          {content.navigationBarSection.mainTitle}
        </Typography>
        <div> {/* Added a div to contain the buttons */}
          <Button
            color="inherit"
            href="#home"
            sx={{
              '&:hover': {
                color: 'purple',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#contact"
            sx={{
              '&:hover': {
                color: 'purple',
              },
            }}
          >
            Contact Us
          </Button>
          <Button
            color="inherit"
            href="#pricing"
            sx={{
              '&:hover': {
                color: 'purple',
              },
            }}
          >
            Pricing
          </Button>
          <Button
            color="inherit"
            href="#about"
            sx={{
              '&:hover': {
                color: 'purple',
              },
            }}
          >
            About Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
