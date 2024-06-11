import fullLogo from "@/assets/images/full-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Link,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { StyledMenuItem, StyledToolbar } from "./StyledElements";
import ToggleColorMode from "./ToggleColorMode";
import { NavbarProps } from "./types";

const Navbar: FC<NavbarProps> = ({ mode, toggleColorMode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newIsOpen: boolean) => () => {
    setIsDrawerOpen(newIsOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          backgroundColor: "transparent",
          marginTop: 2,
        }}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="regular">
            <Stack direction="row" flexGrow={1} ml={-1}>
              <Link
                href="/"
                sx={{
                  "&:hover::before": {
                    width: 0,
                  },
                }}
              >
                <img src={fullLogo} width="100px" alt="logo of safer" />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, px: 3 }}>
                <StyledMenuItem onClick={() => scrollToSection("features")}>
                  <Typography variant="body2" color="text.primary">
                    Featured Deals
                  </Typography>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => scrollToSection("testimonials")}>
                  <Typography variant="body2" color="text.primary">
                    Trending Destinations
                  </Typography>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => scrollToSection("highlights")}>
                  <Typography variant="body2" color="text.primary">
                    Recently Visited Hotels
                  </Typography>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => scrollToSection("pricing")}>
                  <Typography variant="body2" color="text.primary">
                    Pricing
                  </Typography>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => scrollToSection("faq")}>
                  <Typography variant="body2" color="text.primary">
                    FAQ
                  </Typography>
                </StyledMenuItem>
              </Box>
            </Stack>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Button
                color="primary"
                variant="text"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-in/"
                target="_blank"
              >
                Sign in
              </Button>
              <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                href="/material-ui/getting-started/templates/sign-up/"
                target="_blank"
              >
                Sign up
              </Button>
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  p={2}
                  flexGrow={1}
                  sx={{
                    minWidth: "60dvw",
                    backgroundColor: "background.paper",
                  }}
                >
                  <Stack alignItems="end" flexGrow={1}>
                    <ToggleColorMode
                      mode={mode}
                      toggleColorMode={toggleColorMode}
                    />
                  </Stack>
                  <MenuItem onClick={() => scrollToSection("features")}>
                    Featured Deals
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("testimonials")}>
                    Trending Destinations
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("highlights")}>
                    Recently Visited Hotels
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("pricing")}>
                    Pricing
                  </MenuItem>
                  <MenuItem onClick={() => scrollToSection("faq")}>
                    FAQ
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-up/"
                      target="_blank"
                      fullWidth
                    >
                      Sign up
                    </Button>
                  </MenuItem>
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/material-ui/getting-started/templates/sign-in/"
                      target="_blank"
                      fullWidth
                    >
                      Sign in
                    </Button>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
