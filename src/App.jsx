import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  const initialData = [
    {
      id: 1,
      hexogonText: '30 мая',
      firstOpponent: 'Соперник №1',
      secondOpponent: 'Соперник №2',
    },
    {
      id: 2,
      hexogonText: '17 июня',
      firstOpponent: 'Соперник №3',
      secondOpponent: 'Соперник №4',
    },
    {
      id: 3,
      hexogonText: '26 июня',
      firstOpponent: 'Соперник №5',
      secondOpponent: 'Соперник №6',
    },
    {
      id: 4,
      hexogonText: '16 июля',
      firstOpponent: 'Соперник №7',
      secondOpponent: 'Соперник №8',
    },
    {
      id: 5,
      hexogonText: '30 сентября',
      firstOpponent: 'Соперник №9',
      secondOpponent: 'Соперник №10',
    },
  ];

  const [data, setData] = useState(initialData);

  const wheelHandle = (e) => {
    let newData;
    if (e.deltaY < 0 && data[0].id > -1) {
      newData = data.map((occasion) => ({
        ...occasion,
        id: occasion.id - 1,
      }));
      setData(newData);
    } else if (e.deltaY > 0 && data[0].id < 3) {
      newData = data.map((occasion) => ({
        ...occasion,
        id: occasion.id + 1,
      }));
      setData(newData);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', wheelHandle);

    return () => {
      window.removeEventListener('wheel', wheelHandle);
    };
  });

  const selectEvent = (event) => {
    const differenceBetweenIds = 3 - event.id;
    const newData = data.map((occasion) => ({
      ...occasion,
      id: occasion.id + differenceBetweenIds,
    }));
    setData(newData);
  };

  return (
    <>
      <Header />
      <Main data={data} selectEvent={selectEvent} />
    </>
  );
};

export default App;
