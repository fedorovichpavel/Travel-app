import React from 'react';

import "./../../Normalize.css";
import "./search.scss";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.res = '';
    this.itemsSearch = this.itemsSearch.bind(this);
    this.resultSearch = this.resultSearch.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  resetSearch() {
    Array.from(document.querySelectorAll('.item')).forEach((item) => {
      if(item.classList.contains('hidden')) {
        item.classList.remove('hidden');
      }
    });

    const item = document.querySelector('.input-search');
    item.value = '';
  }

  resultSearch() {
    Array.from(document.querySelectorAll('.item')).forEach((item) => {
      if(!item.classList.contains('hidden')) {
        item.classList.add('hidden');
      }
    });

    let listDataCountry = Array.from(document.querySelectorAll('.country h4'))
                        .map((item) => item.textContent);
    let listDataCapital = Array.from(document.querySelectorAll('.country h5'))
                        .map((item) => item.textContent);
    let listData = listDataCountry.concat(listDataCapital);
    let filter = listData.filter((item) => item.includes(this.res));

    filter.map((item) => {
      const countries = document.querySelectorAll('.country h4');
      const capitals = document.querySelectorAll('.country h5');
      for(let i = 0; i < countries.length; i ++) {
        let textCountry = countries[i].textContent;
        let textCapital = capitals[i].textContent;
        if(textCountry.includes(item) || textCapital.includes(item)) {
          let parent = countries[i].parentElement.parentElement.parentElement.parentElement;
          if(parent.classList.contains('hidden')) {
            parent.classList.remove('hidden');
          }
        }
      }
    })
  }

  itemsSearch(event) {
    this.res = event.target.value;
    console.log(this.res);
    //можно живой поиск
    // this.resultSearch();
  }


	render() {
		return (
      <div className="search">
        <input
          type="text"
          name="search"
          className="input-search"
          autoComplete={'off'}
          autoFocus={true}
          placeholder="enter name country..."
          onInput={this.itemsSearch}
        />
        <button className="reset" onClick={this.resetSearch}>x</button>
        <button onClick={this.resultSearch}>search</button>
      </div>
		);
	}
}
