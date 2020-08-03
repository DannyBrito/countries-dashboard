import React, {useEffect} from 'react'

import uuid from 'react-uuid'
import { srcSelectorByTheme } from '../constants/constants'
const CountryDetailPage = ({lightTheme,dataFetched,history, changeDetailPage,borderCountries, flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders}) =>{

    const formatDetail = (data = []) =>{
        if(typeof data[0] !== 'object') return data.join(' ,')
        return data.reduce((currentReducer, item,index) => {
            const temporal  = `${currentReducer}${item.name}`
            return index === data.length - 1 ? temporal : temporal +', '
        },'')
    }

    useEffect(()=>{
        if(dataFetched && !name) history.push('/')
    },[dataFetched,name,history])
    return name ? (
        <div className="main-container country-detail-container">
            <div className="controllers-box">
                <button onClick={()=>history.goBack()} className="back-button">
                    <img className="icon" src={srcSelectorByTheme(lightTheme,'arrow')}/>Back 
                </button>
            </div>
            
            <div className="detail-container">
                <div className="flag-box">
                    <img src={flag} alt={`${name}'s flag`}/>
                </div>
                <div className="country-info-box">
                    <div className="country-name">
                        {name}
                    </div>
                    <div className="info-box primary-info">
                        <p>Native Name: <span>{nativeName}</span></p>
                        <p>Population: <span>{population}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Sub Region: <span>{subregion}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </div>
                    <div className="info-box secondary-info">
                        <p>Top Level Domain: <span>{formatDetail(topLevelDomain)}</span></p>
                        <p>Currencies: <span>{formatDetail(currencies)}</span></p>
                        <p>Languages: <span>{formatDetail(languages)}</span></p>
                    </div>
                    <div className="borders-container">
                        <div className="title"> Border Countries:</div>
                        <div className="border-cards">
                            {borderCountries(borders).map(country =>
                                <div onClick={() => changeDetailPage(country.alpha3Code)} key={uuid()} className="border-card"> {country.name} </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    :
    (<div><img alt="" style={{height:'300px'}}src="loading.svg"/></div>)
}

export default CountryDetailPage