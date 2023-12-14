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
        //created commitments data
        data: [4, 2, 3, 4, 5, 1, 3],
        strokeWidth: 2,
        color: (opacity = 1) => activeColors.graphBlue,
      },
      {
        //sucessful commitments data
        data: [2, 2, 3, 1, 4, 0, 1],
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
