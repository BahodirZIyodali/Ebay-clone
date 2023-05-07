import ebay from '../img/fxxj3ttftm5ltcqnto1o4baovyl.png.png'
import instance from '../api/instance';
import {BsSearch} from 'react-icons/bs'
import React, {  useState } from 'react';

import { Link } from 'react-router-dom';

function Search() {
  const [serachResult, setSerachResult] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const giveSearchInfos = (e) => {
    setSearchValue(e.target.value)
    instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
    .then(response => setSerachResult(response.data))
    .catch(err => console.log(err))
   
}

const error = []
const giveMoreResult = (e) => {
    e.preventDefault();
    window.location.pathname = `/search/${searchValue}`;
}

  return (
    <div className='bg-light '>
         <nav className="navbar navbar-expand-lg navbar-light bg-light container ">
    <Link to="/">    <img src={ebay} alt="" /></Link>
      <div className="collapse navbar-collapse d-flex justify-content-between " id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Shop by category</a>
          </li>
        </ul>
        <form onSubmit={giveMoreResult} className='z-3 w-100 '>
                    <div className='search__wrapper '>
                        <div className='search__elements'>
                            <input onChange={giveSearchInfos}
                            type="text"
                            className='search__input'
                            placeholder='Search for anything'
                            />
                            { serachResult?.length > 0 && searchValue
                                ? <div className='search__suggestions'>
                                    {
                                        serachResult.map(search => 
                                            <Link key={search.id} className='search__item--link' to={`/products/${search.id}`}>
                                                <span>{search.title}</span>
                                            </Link>
                                            
                                            )
                                    }
                                </div>
                                : <></>
                            }
                        </div>
                        <button className='btn__search'>
                        <BsSearch/>
                            Search
                        </button>
                    </div>
                </form>
      </div>
    </nav>
    </div>
  );
}

export default Search;






