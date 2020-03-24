import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    let selectedCityProps = null;
    if (this.props.selectedCity) {
      const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug}`;
      selectedCityProps = (
        <div className="col-12 col-lg-8">
          <div className="active-city">
            <h1>{this.props.selectedCity.name}</h1>
            <p>{this.props.selectedCity.address}</p>
            <img src={url} alt="" />
          </div>
        </div>);
    }
    return (
      selectedCityProps
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
