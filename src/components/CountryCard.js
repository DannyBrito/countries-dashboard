import React from 'react';
import {numberFormater} from '../constants/constants'

const CountryCard = ({changeDetailPage,alpha3Code,name,population,region,capital,flag}) =>{
    return(
        <div onClick={()=>changeDetailPage(alpha3Code)} className="country-card">
            <div className="flag-container-card">
                <img src={flag} alt={`${name}'s flag`}/>
            </div>
            <div className="detail-container">
                <div className="country-name">{name}</div>
                <div className="subtext population-info">
                    Population: <span>{numberFormater(population)}</span>
                </div>
                <div className="subtext region-info">
                    Region: <span>{region}</span>
                </div>
                <div className="subtext capital-info">
                    Capital: <span>{capital}</span>
                </div>
            </div>
        </div>
    )
}

export default CountryCard