import React from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Colors } from "./styles"

const linedata = {
  labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
  datasets: [
    {
      data: [3, 4, 9, 2, 5, 6, 1],
    },
  ],
};

export const LineGraph = () => {
    return (
            <LineChart
            data={linedata}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            chartConfig={{
                backgroundColor: Colors.secondary,
                backgroundGradientFrom: Colors.secondary,
                backgroundGradientTo: Colors.tertiary,
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(236, 219, 186, ${opacity})`,
                style: {
                borderRadius: 16,
                },
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
            }}
            />
    );
};
