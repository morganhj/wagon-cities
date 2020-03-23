import React from 'react';
import CityList from '../containers/cities';
import ActiveCity from '../containers/active_city';

const App = () => {
  return (
    <div className="row app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
