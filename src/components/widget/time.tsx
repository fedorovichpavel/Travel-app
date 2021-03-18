import React, {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import "./../../Normalize.css";
import "./widget.scss";

function showWeekDay(d:any, language:string) {
 switch (d) {
     case 1:
         d = {'en':'Monday', 'ru': 'Понедельник', 'fr': 'Lundi'};
         break;
     case 2:
         d = {'en':'Tuesday', 'ru': 'Вторник', 'fr': 'Mardi'};
         break;
     case 3:
         d = {'en':'Wednesday', 'ru': 'Среда', 'fr': 'Mercredi'};
         break;
     case 4:
         d = {'en':'Thursday', 'ru': 'Четверг', 'fr': 'Jeudi'};
         break;
     case 5:
         d = {'en':'Friday', 'ru': 'Пятница', 'fr': 'Vendredi'};
         break;
     case 6:
         d = {'en':'Saturday', 'ru': 'Суббота', 'fr': 'Samedi'};
         break;
     case 0:
         d = {'en':'Sunday', 'ru': 'Воскресенье', 'fr': 'Dimanche'};
         break;
     default:
         break;
 }
 return d[language];
}

function showMonth(m:any, language:string) {
 switch (m) {
     case 0:
         m = {'en':'January', 'ru': 'Январь', 'fr': 'Janvier'};
         break;
     case 1:
         m = {'en':'February', 'ru': 'Февраль', 'fr': 'Février'};
         break;
     case 2:
         m = {'en':'March', 'ru': 'Март', 'fr': 'Mars'};
         break;
     case 3:
         m = {'en':'April', 'ru': 'Апрель', 'fr': 'Avril'};
         break;
     case 4:
         m = {'en':'May', 'ru': 'Май', 'fr': 'Peut'};
         break;
     case 5:
         m = {'en':'June', 'ru': 'Июнь', 'fr': 'Juin'};
         break;
     case 6:
         m = {'en':'July', 'ru': 'Июль', 'fr': 'Juillet'};
         break;
     case 7:
         m = {'en':'August', 'ru': 'Август', 'fr': 'Août'};
         break;
     case 8:
         m = {'en':'September', 'ru': 'Сентябрь', 'fr': 'Septembre'};
         break;
     case 9:
         m = {'en':'October', 'ru': 'Октябрь', 'fr': 'Octobre'};
         break;
     case 10:
         m = {'en':'November', 'ru': 'Ноябрь', 'fr': 'Novembre'};
         break;
     case 11:
         m = {'en':'December', 'ru': 'Декабрь', 'fr': 'Décembre'};
         break;
     default:
         break;
 }
 return m[language];
}

function Time(props: any) {
 const [time, setTime] = useState('');
  const [day, setDay] = useState('');
  const lang:string = useSelector((state: State) => state.lang.lang);
const timeZone:any = {
    'Athens': '-1',
    'Minsk': '0',
    'Paris': '-2',
    'Berlin': '-2',
    'Tokyo': '6',
    'Rome': '-2',
    'Madrid': '-2',
    'New_Delhi': '-2'
}
  useEffect(()=> {
   let today = new Date();
   today.setUTCHours(today.getUTCHours() + +timeZone[props.capital.en]);
   let hour = today.getHours(),
   min = today.getMinutes(),
   sec = today.getSeconds(),
   week = today.getDay(),
   day = today.getDate(),
   month = today.getMonth(),
   year = today.getFullYear();

 setTimeout(()=> {
   setTime(`${hour}:${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`);
   setDay(`${showWeekDay(week, lang)}, ${showMonth(month, lang)} ${day}, ${year}`);
 }, 1000);
 });

return (
 <div className="date-conteiner">
        <span className="days">{day}</span>
        <time className="time">{time}</time>
        </div>
)
}

export default Time;