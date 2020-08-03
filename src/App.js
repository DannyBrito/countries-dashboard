import React, {useState,useEffect} from 'react';
import  {getAllCountries} from './constants/constants'
import {Switch, Route,useHistory} from 'react-router-dom'
import './styles/App.scss';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CountryDetailPage from './components/CountryDetailPage';

const App = () => {
  
  const [countries,setCountries] = useState([])
  const [lightTheme,setLightTheme] = useState(true)
  const [currentCountry,setCurrentCountry] = useState('')

  const history = useHistory()

  useEffect(()=>{
    getAllCountries()
      .then(res => {  
        const result = res.reduce((obj,item)=>({
          ...obj, [item.alpha3Code]:item
        }),{})
        setCountries(result)
      })
      .catch(console.log)
  },[])

  useEffect(()=>{
    if(currentCountry)history.push(`/${currentCountry}`)
  },[currentCountry,history])

  const borderCountries = (borderCountries = []) => {
    return borderCountries.map(code => countries[code])
  }
  const changeDetailPage = newCountry =>{
      setCurrentCountry(newCountry)
  }

  return (
    <div className="App">
      <NavBar lightTheme={lightTheme} />
      <Switch>
        <Route path={`/:countryCode`} render={({match,history})=><CountryDetailPage changeDetailPage={changeDetailPage} borderCountries={borderCountries} dataFetched={Object.keys(countries).length !== 0} history={history} {...countries[match.params.countryCode.toUpperCase()]} />} />
        <Route exact path="/" render={(routerProps)=> <HomePage lightTheme={lightTheme} changeDetailPage={changeDetailPage} countries={Object.values(countries)} /> }/>
      </Switch>

    </div>
  );
}

export default App;
