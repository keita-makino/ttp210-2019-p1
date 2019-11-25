import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';
import { Deck, Slide } from 'spectacle';
import slides, { transitions } from './presentation/index.mdx';
import theme from './presentation/theme';

require('normalize.css');

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Deck
      transition={['slide']}
      transitionDuration={700}
      theme={theme}
      showFullscreenControl={false}
      progress={'none'}
    >
      {slides.map((S, i) => {
        let transition = transitions[i] || null;
        return (
          <S bgColor={'#060810'} transition={transition} key={`slide-${i}`} />
        );
      })}
    </Deck>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(() => {
    const newTheme = require('./presentation/theme').default;
    const newSlides = require('./presentation/index.mdx').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <Deck
          transition={['slide']}
          transitionDuration={700}
          theme={newTheme}
          showFullscreenControl={false}
        >
          {newSlides.map((S, i) => {
            let transition = transitions[i] || null;
            return (
              <S
                bgColor={'#060810'}
                transition={transition}
                key={`slide-${i}`}
              />
            );
          })}
        </Deck>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
