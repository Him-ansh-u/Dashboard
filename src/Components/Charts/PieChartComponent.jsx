import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import { PieCharts } from "./piechart";
export const PieChartComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {isNonMobile ? (
        <Box
          p='10px'
          bgcolor={colors.white[900]}
          width='270px'
          borderRadius='10px'>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              <Typography variant='h2' fontSize='15px' fontWeight='bold'>
                Overview
              </Typography>
              <Typography variant='h5' fontSize='12px' color='lightgray'>
                Monthly Earning
              </Typography>
            </Box>
          </Box>
          <Box
            display='flex'
            height='90%'
            justifyContent='center'
            alignItems='center'>
            <PieCharts />
          </Box>
        </Box>
      ) : (
        <Box
          p='10px'
          bgcolor={colors.white[900]}
          width='90%'
          height='200px'
          borderRadius='10px'>
          <Box display='flex' justifyContent='space-between'>
            <Box>
              <Typography variant='h2' fontSize='15px' fontWeight='bold'>
                Overview
              </Typography>
              <Typography variant='h5' fontSize='12px' color='lightgray'>
                Monthly Earning
              </Typography>
            </Box>
          </Box>
          <Box
            display='flex'
            height='90%'
            justifyContent='center'
            alignItems='center'>
            <PieCharts />
          </Box>
        </Box>
      )}
    </>
  );
};
