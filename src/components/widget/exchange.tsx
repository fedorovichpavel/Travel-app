import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import { ExchangeI } from "../../interfaces/Country";


const apiKey = 'f58a5ca4c71e8b86894a2efc';
function Usd(props: any) {
 const [ratesUSD, setRatesUSD] = useState<ExchangeI[]>([]);

useEffect(() => {
 axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`).then((response) => {
   const dataUSD: any[] = [];
   if (response.data) {
       dataUSD.push({
         rates: response.data.conversion_rates
       });
     setRatesUSD(dataUSD);
   }
 });
}, [setRatesUSD]);

return (
 (ratesUSD.length !== 0) && (ratesUSD[0].rates !== undefined) ? <div className="exchange-usd curr">1 USD -&gt; {ratesUSD[0].rates[props.currency]} {props.currency}</div> : <Loader />
)
}

function Eur(props:any) {
 const [ratesEUR, setRatesEUR] = useState<ExchangeI[]>([]);

    useEffect(() => {
     axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/EUR`).then((response) => {
       const dataEUR: any[] = [];
       if (response.data) {
           dataEUR.push({
             rates: response.data.conversion_rates
           });
         setRatesEUR(dataEUR);
       }
     });
   }, [setRatesEUR]);
return (
 (ratesEUR.length !== 0) && (ratesEUR[0].rates !== undefined) ? <div className="exchange-eur curr">1 EUR -&gt; {ratesEUR[0].rates[props.currency]} {props.currency}</div> : <Loader />
)
}

function Exchange(props:any) {
const lang:string = useSelector((state: State) => state.lang.lang);
const title:any = {'en': 'Exchange Rates', 'ru': 'Обменные курсы', 'fr': "Taux d'échange"};
 return (
  <div className="exchange">
          <h2 className="exchange-title">{title[lang]}</h2>
                                                                
          <Usd currency={props.currency}/>
          <Eur currency={props.currency}/>
          </div>
 )
}

export default Exchange;