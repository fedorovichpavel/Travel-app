import React from 'react';
import ReactDOM from "react-dom";

import "./../../Normalize.css";
import "./List-cards.scss";

import Card from './../card/card';

type Country = {
  id: number,
  urlImg: string,
  country: string,
  capital: string
}

function ListCards() {

  const listItems:Country[] = [
    {
      id: 0,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Italy',
      capital: 'Rome'
    },
    {
      id: 1,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Greece',
      capital: 'Athens'
    },
    {
      id: 2,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'France',
      capital: 'Paris'
    },
    {
      id: 3,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Germany',
      capital: 'Berlin'
    },
    {
      id: 4,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Finland',
      capital: 'Helsinki'
    },
    {
      id: 5,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Denmark',
      capital: 'Copenhagen'
    },
    {
      id: 6,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Belgium',
      capital: 'Brussels'
    },
    {
      id: 7,
      urlImg: 'https://cms.enjourney.ru/upload/Jana/Italia/itpl.jpg',
      country: 'Romania',
      capital: 'Bucharest'
    }
  ];
  const countItems:number = listItems.length;

  return (
    <div className="wrap-list-countries">
      <Card count={countItems} items={listItems}/>
    </div>
  )
}

export default ListCards;
