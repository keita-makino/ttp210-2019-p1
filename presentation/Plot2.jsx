import React, { useState } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis';
import { Text } from 'spectacle';

const Plot = props => {
  const [step, setStep] = useState(0);

  const data =
    step === 0
      ? [
          {
            x: 'The U.S.',
            y: 4.8
          },
          {
            x: 'Japan',
            y: 0
          }
        ]
      : step === 1
      ? [
          {
            x: 'The U.S.',
            y: 4.2
          },
          {
            x: 'Japan',
            y: 25.1
          }
        ]
      : [
          {
            x: 'The U.S.',
            y: 4.2 / 0.327
          },
          {
            x: 'Japan',
            y: 24.2 / 0.127
          }
        ];

  const param = {
    stiffness: 100,
    damping: 25
  };

  return (
    <React.Fragment>
      <Text textAlign={'left'} textSize={28}>
        2017 / {step !== 2 ? '(Billion)' : '(Per Capita)'}
      </Text>
      <XYPlot
        xType={'ordinal'}
        width={900}
        height={450}
        margin={{ left: 80 }}
        onClick={() => {
          setStep(step => step + 1);
        }}
        animation={param}
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis style={{ text: { fill: '#EEEEEE' } }} />
        <YAxis style={{ text: { fill: '#EEEEEE' } }} />
        <VerticalBarSeries data={data} animation={param}></VerticalBarSeries>
      </XYPlot>
    </React.Fragment>
  );
};

export default Plot;
