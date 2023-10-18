import { useState } from "react";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { user } from "../Data/data";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Item = ({ title, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#D4D5E0",
      }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const [isMobileCollapsed, setIsMobileCollapsed] = useState(true);

  return (
    <Box height='100vh'>
      {!isNonMobile ? (
        <Box height='100vh' width='50px' overflow='hidden'>
          <Sidebar backgroundColor='#040440' collapsed={isMobileCollapsed}>
            <Menu iconShape='square'>
              <Box
                height='100vh'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'>
                <Box>
                  <MenuItem
                    color='#D4D5E0'
                    onClick={() => setIsMobileCollapsed(!isMobileCollapsed)}
                    icon={isMobileCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                      margin: "0 0 0 -10px",
                      color: "#D4D5E0",
                    }}>
                    {!isMobileCollapsed && (
                      <Box
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        ml='2px'
                        color='#D4D5E0'>
                        <TokenOutlinedIcon />
                        <Typography fontSize='20px'>Dashboard</Typography>
                        <IconButton
                          style={{ color: "#D4D5E0" }}
                          onClick={() =>
                            setIsMobileCollapsed(!isMobileCollapsed)
                          }>
                          <MenuOutlinedIcon />
                        </IconButton>
                      </Box>
                    )}
                  </MenuItem>
                  <Box
                    ml='-10px'
                    color='#D4D5E0'
                    paddingLeft={isMobileCollapsed ? undefined : "0%"}>
                    <Item title='Dashboard' icon={<DashboardOutlinedIcon />} />
                    <SubMenu
                      icon={<ViewInArOutlinedIcon />}
                      label='Products'></SubMenu>
                    <SubMenu
                      icon={<AccountBoxOutlinedIcon />}
                      label='Customer'></SubMenu>
                    <SubMenu
                      icon={<AccountBalanceWalletOutlinedIcon />}
                      label='Income'></SubMenu>
                    <SubMenu
                      icon={<LocalAtmOutlinedIcon />}
                      label='Promote'></SubMenu>
                    <SubMenu
                      icon={<LiveHelpOutlinedIcon />}
                      label='Help'></SubMenu>
                  </Box>
                </Box>

                {/* LOGO AND MENU ICON */}

                <Box height='50px' ml='-15px' width='100%'>
                  {!isMobileCollapsed && (
                    <Box
                      display='flex'
                      m='0px 10px 0px 10px '
                      backgroundColor='#2D2D69'
                      borderRadius='5px'>
                      <Box
                        ml='10px'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'>
                        <img
                          alt='profile-user'
                          width='35px'
                          height='35px'
                          src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                          style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                      </Box>
                      <Box m='5px'>
                        <Typography variant='h2' fontSize='12px' color='#fff'>
                          {user.name}
                        </Typography>
                        <Typography variant='h5' fontSize='12px' color='green'>
                          {user.work}
                        </Typography>
                      </Box>
                    </Box>
                  )}
                  {isMobileCollapsed && (
                    <Box
                      display='flex'
                      justifyContent='center'
                      alignItems='center'>
                      <img
                        alt='profile-user'
                        width='20px'
                        height='20px'
                        src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            </Menu>
          </Sidebar>
        </Box>
      ) : (
        <Sidebar backgroundColor='#040440' collapsed={isCollapsed}>
          <Menu iconShape='square'>
            <Box
              height='100vh'
              display='flex'
              flexDirection='column'
              justifyContent='space-between'>
              <Box>
                <MenuItem
                  color='#D4D5E0'
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                  style={{
                    margin: "5px 0 5px 0",
                    color: "#D4D5E0",
                  }}>
                  {!isCollapsed && (
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                      ml='5px'
                      color='#D4D5E0'>
                      <TokenOutlinedIcon />
                      <Typography variant='h3'>Dashboard</Typography>
                      <IconButton
                        style={{ color: "#D4D5E0" }}
                        onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlinedIcon />
                      </IconButton>
                    </Box>
                  )}
                </MenuItem>
                <Box
                  color='#D4D5E0'
                  paddingLeft={isCollapsed ? undefined : "0%"}>
                  <Item title='Dashboard' icon={<DashboardOutlinedIcon />} />
                  <SubMenu
                    icon={<ViewInArOutlinedIcon />}
                    label='Products'></SubMenu>
                  <SubMenu
                    icon={<AccountBoxOutlinedIcon />}
                    label='Customer'></SubMenu>
                  <SubMenu
                    icon={<AccountBalanceWalletOutlinedIcon />}
                    label='Income'></SubMenu>
                  <SubMenu
                    icon={<LocalAtmOutlinedIcon />}
                    label='Promote'></SubMenu>
                  <SubMenu
                    icon={<LiveHelpOutlinedIcon />}
                    label='Help'></SubMenu>
                </Box>
              </Box>

              {/* LOGO AND MENU ICON */}

              <Box height='50px' width='100%' mb='30px'>
                {!isCollapsed && (
                  <Box
                    display='flex'
                    m='0px 10px 0px 10px '
                    backgroundColor='#2D2D69'
                    borderRadius='5px'>
                    <Box
                      ml='10px'
                      display='flex'
                      justifyContent='center'
                      alignItems='center'>
                      <img
                        alt='profile-user'
                        width='35px'
                        height='35px'
                        src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                      />
                    </Box>
                    <Box m='5px'>
                      <Typography variant='h2' fontSize='12px' color='#fff'>
                        {user.name}
                      </Typography>
                      <Typography variant='h5' fontSize='12px' color='green'>
                        {user.work}
                      </Typography>
                    </Box>
                  </Box>
                )}
                {isCollapsed && (
                  <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'>
                    <img
                      alt='profile-user'
                      width='30px'
                      height='30px'
                      src='https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png'
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                )}
              </Box>
            </Box>
          </Menu>
        </Sidebar>
      )}
    </Box>
  );
};

export default SidebarComponent;
