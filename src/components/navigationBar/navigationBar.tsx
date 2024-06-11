import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { content } from "../../content/content"

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#F6832A' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Press Start 2P', system-ui", color: "white" }}>
          {content.navigationBarSection.mainTitle}
        </Typography>
        <Button color="inherit" href="#home">Home</Button>
        <Button color="inherit" href="#contact">Contact Us</Button>
        <Button color="inherit" href="#pricing">Pricing</Button>
        <Button color="inherit" href="#about">About Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;