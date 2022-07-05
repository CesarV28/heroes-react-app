import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroesCard } from "../components/HeroesCard";
import { getHeroByName } from "../helpers";
import { AlertMessage } from "../../components";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  
  const { q = ''} = queryString.parse( location.search );

  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if( searchText.trim().length <= 1 ) return
    navigate(`?q=${ searchText }`)
    
  }

  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;
  

  return (
    <>
      <h1>Search</h1>
      <hr/>

      <div className="row">

        <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText" 
                autoComplete="off" 
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-2">
                Search
              </button>

            </form>
          </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {(showSearch) && <AlertMessage alertType={'primary'} message={'Search a hero'}/>} 
          {(showError) && <AlertMessage alertType={'danger'} message={`There are no results for: ${q}`}/>} 

          {
            heroes.map( hero => (
              <HeroesCard key={hero.id} {...hero}/>
            ))
          }
        </div>

      </div>
    </>
  )
}
