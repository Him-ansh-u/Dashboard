import { Barchart } from "./Barchart";
import {
  Box,
  InputLabel,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { tokens } from "../../theme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const BarchartComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {isNonMobile ? (
        <Box bgcolor={colors.white[900]} className='barchart'>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              <Typography variant='h2' fontSize='15px' fontWeight='bold'>
                Overview
              </Typography>
              <Typography variant='h5' fontSize='12px' color='lightgray'>
                Monthly Earning
              </Typography>
            </Box>
            <Box width='100px'>
              <FormControl
                sx={{
                  width: "100px",
                  "& fieldset": { border: "none" },
                }}
                size='small'>
                <InputLabel> Quarterly</InputLabel>
                <Select label='Quarterly'>
                  <MenuItem value='Quarterly'>Quarterly</MenuItem>
                  <MenuItem value='Yearly'>Yearly</MenuItem>
                  <MenuItem value='Monthly'>Monthly</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mt='10px' height='220px'>
            <Barchart />
          </Box>
        </Box>
      ) : (
        <Box
          width='100%'
          height='200px'
          bgcolor={colors.white[900]}
          className='barchart'>
          <Box display='flex' height='20px' justifyContent='space-between'>
            <Box width='100%'>
              <Typography variant='h2' fontSize='10px' fontWeight='bold'>
                Overview
              </Typography>
              <Typography variant='h5' fontSize='8px' color='lightgray'>
                Monthly Earning
              </Typography>
            </Box>
            <Box width='100px'>
              <FormControl
                sx={{
                  width: "80px",
                  height: "10px",
                  fontSize: "10px",
                  "& fieldset": { border: "none" },
                }}
                size='small'>
                <InputLabel> Quarterly</InputLabel>
                <Select label='Quarterly'>
                  <MenuItem value='Quarterly'>Quarterly</MenuItem>
                  <MenuItem value='Yearly'>Yearly</MenuItem>
                  <MenuItem value='Monthly'>Monthly</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mt='10px' height='170px'>
            <Barchart />
          </Box>
        </Box>
      )}
    </>
  );
};
