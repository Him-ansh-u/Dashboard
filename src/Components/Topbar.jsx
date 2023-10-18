import {
  Box,
  IconButton,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputAdornment from "@mui/material/InputAdornment";
import {
  DarkModeOutlined,
  LightModeOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { user } from "../Data/data";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const isNonMobile = useMediaQuery("(min-width:1000px)");

  return (
    <div>
      {isNonMobile ? (
        <Box
          display='flex'
          width='100%'
          justifyContent='space-between'
          p='10px 10px 10px 20px'>
          {/* hello section */}
          <Typography variant='h1' fontSize='1rem' fontWeight='Bold'>
            Hello {user.name} 👋,
          </Typography>

          {/* Search and dark mode */}
          <Box display='flex' justifyContent='space-between'>
            <Box backgroundColor={colors.primary[400]} borderRadius='3px'>
              <TextField
                variant='outlined'
                placeholder='Search'
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              />
            </Box>
            <Box marginLeft='5px' borderRadius='3px'>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlined />
                ) : (
                  <DarkModeOutlined />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          ml='-20px'
          overflow='hidden'
          display='flex'
          width='100%'
          justifyContent='space-between'>
          {/* hello section */}
          <Typography variant='h1' fontSize='0.8rem' fontWeight='Bold'>
            Hello {user.name} 👋,
          </Typography>

          {/* Search and dark mode */}
          <Box display='flex' justifyContent='space-between'>
            <Box backgroundColor={colors.primary[400]} borderRadius='3px'>
              <TextField
                variant='outlined'
                placeholder='Search'
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              />
            </Box>
            <Box marginLeft='5px' borderRadius='3px'>
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <LightModeOutlined />
                ) : (
                  <DarkModeOutlined />
                )}
              </IconButton>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};
export default Topbar;
