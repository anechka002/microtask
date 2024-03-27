import React from 'react';
import { FilterType, MoneyType } from '../App';
import { Currency } from './Currency';

type ComponentPropsType = {
  currentMoney: MoneyType[];
  onClickFilterHandler: (newValue: FilterType) => void;
};

function Component({ currentMoney, onClickFilterHandler }: ComponentPropsType) {
  return (
    <>
      <ul>
        {currentMoney.map((m, index) => {
          return (
            <Currency
              key={index}
              value={m.value}
              number={m.number}
              banknots={m.banknots}
            />
          );
        })}
      </ul>
      <div style={{ marginLeft: '40px' }}>
        <button onClick={() => onClickFilterHandler('all')}>all</button>
        <button onClick={() => onClickFilterHandler('RUBLS')}>ruble</button>
        <button onClick={() => onClickFilterHandler('Dollars')}>dollar</button>
      </div>
    </>
  );
}

export default Component;
