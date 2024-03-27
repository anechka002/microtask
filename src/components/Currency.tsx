import React from 'react';
import { FilterType, MoneyType } from '../App';

type CurrencyType = {
  banknots: string;
  value: number;
  number: string;
};

export const Currency = (props: CurrencyType) => {
  return (
    <li>
      <span>{props.banknots}</span>
      <span>{props.value}</span>
      <span>{props.number}</span>
    </li>
  );
};
