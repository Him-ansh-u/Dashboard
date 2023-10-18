import { BarchartComponent } from "./Charts/BarchartComponent";
import { Box, useMediaQuery } from "@mui/material";
import { PieChartComponent } from "./Charts/PieChartComponent";

export const CenterSection = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {isNonMobile ? (
        <Box
          display='flex'
          justifyContent='space-between'
          maxHeight='260px'
          marginTop='10px'>
          <BarchartComponent />
          <PieChartComponent />
        </Box>
      ) : (
        <Box
          ml='-20px'
          display='flex'
          flexDirection='column'
          alignItems='center'
          width='100%'>
          <BarchartComponent />
          <PieChartComponent />
        </Box>
      )}
    </>
  );
};
