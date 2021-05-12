/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ data, selectEvent }) => (
  <main className="main">
    <div className="main__outer-circle">
      {data.map((event) => (
        <>
          <div className={event.id === 3 ? 'first-block' : 'first-block_hide'}>
            <span className="first-block__text">{event.firstOpponent}</span>
          </div>
          <div className={event.id === 3 ? 'second-block' : 'second-block_hide'}>
            <span className="second-block__text">{event.secondOpponent}</span>
          </div>
          <div className={`hexagon-${event.id} hexagon`} onClick={() => selectEvent(event)}>
            {event.id === 3 && <div className="hexagon__subtitle">Стадион</div>}
            <div className={event.id === 3 ? 'hexagon__title_bold' : 'hexagon__title'}>{event.hexogonText}</div>
            {event.id === 3 && (
            <>
              <div className="hexagon__subtitle">19:00</div>
              <button type="button" className="hexagon__button">Купить билет</button>
            </>
            )}
          </div>
        </>
      ))}
      <div className="main__inner-circle" />
    </div>
  </main>
);

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  selectEvent: PropTypes.func,
};

Main.defaultProps = {
  data: [],
  selectEvent: PropTypes.func,
};

export default Main;
