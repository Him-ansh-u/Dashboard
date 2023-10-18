import { useTheme } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
import { chartData as data } from "../../Data/data";
export const Barchart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      keys={["Product"]}
      indexBy='month'
      margin={{ top: 0, right: 0, bottom: 50, left: 0 }}
      padding={0.2}
      innerPadding={1}
      indexScale={{ type: "band", round: true }}
      colors='#f3efff'
      borderRadius={5}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.1"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{}}
      axisLeft={null}
      enableGridY={false}
      labelSkipwidth={10}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
    />
  );
};
