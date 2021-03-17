import React from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

function Exchange(props: any) {
const lang:string = useSelector((state: State) => state.lang.lang);
const usd = props.usd.conversion_rates;
const title:any = {'en': 'Exchange Rates', 'ru': 'Обменные курсы', 'fr': "Taux d'échange"};
 return (
  <div className="exchange">
          <h2 className="exchange-title">{title[lang]}</h2>
                                                                
          <div className="exchange-usd curr">1 USD -&gt; {'123'} RUB</div>
          <div className="exchange-eur curr">1 EUR -&gt; 3.232 RUB</div>
          </div>
 )
}

export default Exchange;