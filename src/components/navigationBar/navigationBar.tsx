import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { content } from "../../content/content";

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: content.navigationBarSection.navBarBackgroundColor }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontFamily: "'Press Start 2P', system-ui", color: "white", marginLeft: '25rem' }}>
          {content.navigationBarSection.mainTitle}
        </Typography>
        <div>
          <Button
            href="#pill1"
            sx={{
              color: content.navigationBarSection.pillFontColor,
              '&:hover': {
                color: `${content.navigationBarSection.pillOnHoverColor}`,
              },
            }}
          >
            {content.navigationBarSection.pill1}
          </Button>
          <Button
            href="#pill2"
            sx={{
              color: content.navigationBarSection.pillFontColor,
              '&:hover': {
                color: `${content.navigationBarSection.pillOnHoverColor}`,
              },
            }}
          >
            {content.navigationBarSection.pill2}
          </Button>
          <Button
            href="#pill3"
            sx={{
              color: content.navigationBarSection.pillFontColor,
              '&:hover': {
                color: `${content.navigationBarSection.pillOnHoverColor}`,
              },
            }}
          >
            {content.navigationBarSection.pill3}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
