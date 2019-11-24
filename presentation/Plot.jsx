import React, { useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";

const Plot = props => {
  const [step, setStep] = useState(0);

  const data =
    step === 0
      ? [
          {
            x: "The U.S.",
            y: 4.2
          },
          {
            x: "Japan",
            y: 0
          }
        ]
      : [
          {
            x: "The U.S.",
            y: 4.2
          },
          {
            x: "Japan",
            y: 62
          }
        ];

  const param = {
    stiffness: 25,
    damping: 25
  };

  return (
    <XYPlot
      xType={"ordinal"}
      width={900}
      height={600}
      margin={{ left: 80 }}
      onClick={() => {
        setStep(1);
      }}
      animation={param}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries data={data} animation={param}></VerticalBarSeries>
    </XYPlot>
  );
};

export default Plot;
