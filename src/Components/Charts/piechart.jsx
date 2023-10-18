import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { pieData as data } from "../../Data/data";
import { ResponsivePie } from "@nivo/pie";
export const PieCharts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Box
        position='absolute'
        display='flex'
        flexDirection='column'
        alignItems='center'>
        <Typography fontSize='1.5rem' fontWeight='bold'>
          65%
        </Typography>
        <Typography mt='-8px' fontSize='0.4 rem'>
          Total new <br />
          Customers
        </Typography>
      </Box>
      <ResponsivePie
        data={data}
        margin={{ top: 15, right: 5, bottom: 15, left: 5 }}
        startAngle={0}
        innerRadius={0.65}
        cornerRadius={3}
        colors={["#F53295", "#5C35EA", "#F1EFFC"]}
        colorBy='index'
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ theme: "background" }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.white[100]}
        arcLinkLabelsThickness={2}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
      />
    </>
  );
};
