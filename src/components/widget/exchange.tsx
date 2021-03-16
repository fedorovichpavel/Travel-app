import React from 'react';

function Exchange(props: any) {
const usd = props.usd.conversion_rates;
 return (
  <div className="exchange">
          <h2 className="exchange-title">Exchange Rates</h2>
                                                                
          <div className="exchange-usd curr">1 USD -&gt; {'123'} RUB</div>
          <div className="exchange-eur curr">1 EUR -&gt; 3.232 RUB</div>
          </div>
 )
}

export default Exchange;