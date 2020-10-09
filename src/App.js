import React from 'react';
import './App.css';
import PromotionCard from 'components/Promotion/Card/Card';

const App = () => {

	const promotion = {
    "id": 1,
    "title": "KIT BARRAS DE M&M",
    "price": 1799,
    "imageUrl": "https://www.academialeven.com.br/blog/wp-content/uploads/2019/10/Fotolia_119942122_Subscription_Monthly_M.jpg",
    "url": "https://www.karamellstore.com.br/?gclid=CjwKCAjwlID8BRAFEiwAnUoK1ZyxYVFo7BOQo9KK_EZouowBrTMuppSqm73MUEDn_djaD7HT1v03ZRoCbSsQAvD_BwE",
    "comments": [
      {
        "id": 1,
        "comment": "DOCES"
      }
    ]
  };

	return (
	 <div className="App" style={{
		maxWidth: 800,
		margin: '30px auto',
	}}>
			<PromotionCard promotion={promotion}/>
	 </div>
	);
 
}

export default App;
