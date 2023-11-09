import { React, useContext } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Colors } from "./styles";
import { ThemeContext } from "../contexts/ThemeContext";

export const LineGraph = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const linedata = {
    labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
    datasets: [
      {
        data: [10, 4, 6, 8, 10, 0, 5],
        strokeWidth: 2,
        color: (opacity = 1) => activeColors.graphBlue,
      },
      {
        data: [5, 4, 6, 3, 8, 0, 2],
        strokeWidth: 2,
        color: (opacity = 1) => "#2EBF03", //green for completed commits
      },
    ],
    legend: ["Commitments", "Successes"],
  };

  return (
    <LineChart
      bezier //keeps it curvy
      data={linedata}
      width={Dimensions.get("window").width - 16}
      height={200}
      chartConfig={{
        useShadowColorFromDataset: true,
        // backgroundColor: activeColors.background,
        backgroundGradientFrom: activeColors.tertiary,
        backgroundGradientTo: activeColors.backgroundAccent,
        decimalPlaces: 0,
        color: (opacity = 1) => activeColors.text,
        style: {
          borderRadius: 16,
        },
      }}
      style={{
        borderRadius: 16,
      }}
    />
  );
};
