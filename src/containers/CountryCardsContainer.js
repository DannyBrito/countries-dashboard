import React from 'react';
import CountryCard from '../components/CountryCard'
import uuid from 'react-uuid'

const CountryCardsContainer = ({changeDetailPage, countries}) => {
  
    const renderCountryCards = () =>
        countries.map(country => <CountryCard changeDetailPage={changeDetailPage} key={uuid()} {...country} />)
  
    return (
    <div className="country-cards-container">
        {renderCountryCards()}
    </div>
    );
}

export default CountryCardsContainer;
