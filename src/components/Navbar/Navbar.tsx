import fullLogo from "@/assets/images/full-logo.png";
import { toggleThemeMode } from "@/features/AppSettings";
import { selectThemeMode } from "@/features/AppSettings/selectors";
import { selectCartItemsCount } from "@/features/Cart";
import { logout, selectIsLoggedIn } from "@/features/User";
import { useAppDispatch, useAppSelector } from "@/store";
import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { LogIn, LogOut, Menu } from "lucide-react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StyledMenuItem, StyledToolbar } from "./StyledElements";
import ToggleColorMode from "./ToggleColorMode";

const Navbar: FC = () => {
  const themeMode = useSelector(selectThemeMode);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const cartItemsCount = useAppSelector(selectCartItemsCount);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newIsOpen: boolean) => () => {
    setIsDrawerOpen(newIsOpen);
  };

  const Logout = () => {
    dispatch(logout());
    navigate("/");
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
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        backgroundColor: "transparent",
        marginTop: 2,
      }}
    >
      <Container>
        <StyledToolbar variant="regular">
          <Stack direction="row" flexGrow={1} ml={-1}>
            <Link to={"/"}>
              <img src={fullLogo} width="100px" alt="logo of safer" />
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, px: 3 }}>
              <StyledMenuItem onClick={() => scrollToSection("features deals")}>
                <Typography variant="body2" color="text.primary">
                  Featured Deals
                </Typography>
              </StyledMenuItem>
              <StyledMenuItem
                onClick={() => scrollToSection("trending destinations")}
              >
                <Typography variant="body2" color="text.primary">
                  Trending Destinations
                </Typography>
              </StyledMenuItem>
              {isLoggedIn && (
                <StyledMenuItem
                  onClick={() => scrollToSection("recently visited hotels")}
                >
                  <Typography variant="body2" color="text.primary">
                    Recently visited Hotels
                  </Typography>
                </StyledMenuItem>
              )}
            </Box>
          </Stack>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <ToggleColorMode
              mode={themeMode}
              toggleColorMode={() => dispatch(toggleThemeMode())}
            />

            {isLoggedIn ? (
              <>
                <Button
                  size="small"
                  sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                  component={Link}
                  to={"/me/checkout"}
                >
                  <Badge badgeContent={cartItemsCount} color="primary">
                    <ShoppingCart color="primary" />
                  </Badge>
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  size="small"
                  onClick={Logout}
                  endIcon={<LogOut size={20} />}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button
                color="primary"
                variant="contained"
                size="small"
                component={Link}
                to={"/auth/login"}
                endIcon={<LogIn size={20} />}
              >
                Login
              </Button>
            )}
          </Box>
          <Box sx={{ display: { sm: "", md: "none" } }}>
            <Button
              variant="text"
              color="primary"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ minWidth: "30px", p: "4px" }}
            >
              <Menu />
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
                <Stack
                  direction="row"
                  justifyContent="end"
                  flexGrow={1}
                  gap={2}
                >
                  <ToggleColorMode
                    mode={themeMode}
                    toggleColorMode={() => dispatch(toggleThemeMode())}
                  />
                  {isLoggedIn && (
                    <Badge badgeContent={4} color="primary">
                      <Button
                        size="small"
                        sx={{ minWidth: "32px", height: "32px", p: "4px" }}
                        component={Link}
                        to={"/me/checkout"}
                      >
                        <ShoppingCart color="primary" />
                      </Button>
                    </Badge>
                  )}
                </Stack>
                <MenuItem onClick={() => scrollToSection("features deals")}>
                  Featured Deals
                </MenuItem>
                <MenuItem
                  onClick={() => scrollToSection("trending destinations")}
                >
                  Trending Destinations
                </MenuItem>
                <Divider />
                {isLoggedIn ? (
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={Logout}
                      endIcon={<LogOut size={20} />}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Button
                      color="primary"
                      variant="contained"
                      component={Link}
                      to={"/auth/login"}
                      endIcon={<LogIn size={20} />}
                      fullWidth
                    >
                      Login
                    </Button>
                  </MenuItem>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
