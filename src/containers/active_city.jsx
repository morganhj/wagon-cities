import React, { Component } from 'react';

const city = { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' };

class ActiveCity extends Component {
  render() {
    const url = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`;
    return (
      <div className="col-12 col-lg-8">
        <div className="active-city">
          <h1>{city.name}</h1>
          <p>{city.address}</p>
          <img src={url} alt="" />
        </div>
      </div>
    );
  }
}

export default ActiveCity;
