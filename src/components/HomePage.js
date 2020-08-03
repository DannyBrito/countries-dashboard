import React,{useState} from 'react'
import CountryCardsContainer from '../containers/CountryCardsContainer'
import { srcSelectorByTheme, allWorldRegions } from '../constants/constants'

const Regions = allWorldRegions()
const HomePage = ({changeDetailPage,countries , lightTheme}) =>{

    const [filterRegion,setFilterRegion] = useState('')
    const [query, setQuery] = useState('')
    const generateFilterOptions = () =>
        Regions.map(region => <option key={region} value={region}>{region? region : 'Filter by Region'}</option>)
  
    const filterCountryByQuery = (data) =>{
        if(!query) return data
        const regexQuery = new RegExp(query,'ig')
        return data.filter(({name}) => regexQuery.test(name))
    }

    const filterByRegion = () =>{
        if(!filterRegion) return countries
        return countries.filter(({region}) => filterRegion === region)
    }
    const completeFilter = () =>{
        let result = filterByRegion()
        return filterCountryByQuery(result)
    }

    return (
        <div className="main-container home-container">
            <div className="controllers-box">
                <div className="search-box">
                    <div className="search-icon-box">
                        <img alt="" src={srcSelectorByTheme(lightTheme,'search')}/>
                        <input placeholder="Search for a country..." type="text" onChange={e => setQuery(e.target.value)} value={query}/>
                    </div>
                </div>
                <div className="filterBox">
                    <label htmlFor="filter-region"/>
                    <select onChange={(e)=>setFilterRegion(e.target.value)} name="filer-region">
                        {generateFilterOptions()}
                    </select>
                </div>
            </div>
            <CountryCardsContainer  changeDetailPage={changeDetailPage} countries={completeFilter()} />
        </div>
    )
}

export default HomePage