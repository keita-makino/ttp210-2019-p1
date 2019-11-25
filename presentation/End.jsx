import React from 'react';
import { Text } from 'spectacle';

const End = () => {
  const [val, setVal] = React.useState(0);

  return (
    <React.Fragment>
      <h1
        style={{ color: '#3366ff', cursor: 'pointer' }}
        onClick={() => setVal(1)}
      >
        {val !== 1 ? 'Thoughts?' : 'Thank you!'}
      </h1>
      {val !== 1 ? null : (
        <Text
          textAlign={'right'}
          textSize={16}
          style={{
            margin: '0 3rem 3rem 0',
            position: 'absolute',
            bottom: 0,
            right: 0
          }}
        >
          Photos for section headers have been taken from Adobe Stock.
          <br />
          1: SeanPavonePhoto, 2: naka, 3: Anthony Brown, 4: PR Image Factory
        </Text>
      )}
    </React.Fragment>
  );
};

export default End;
