import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseFetchdata from '../hooks/UseFetchdata';

import instance from '../api/instance';

const Search = () => {
    const [loverSelect, setLoverSelect] = useState(1)
    const [upperSelect, setUpperSelect] = useState(1)
    const [filterResult, setFilterResult] = useState([])

    const productsInfo = useParams()
    let [data, loading] = UseFetchdata(`/products/?title=${productsInfo.productName}`)

    useEffect(()=> {
        if(loverSelect > upperSelect){
            setLoverSelect(upperSelect)
            setUpperSelect(loverSelect)
        }
        instance.get(`/products/?title=${productsInfo.productName}&price_min=${loverSelect}&price_max=${upperSelect}`)
        .then(response => setFilterResult(response.data))
    },[loverSelect, upperSelect])

    if(filterResult.length > 0) data = filterResult


    const trimDesc = (str) => {
            return str?.split(" ").splice(0, 5).join(" ") + '...'
    }


    return (
        <section className='search__result'>
            <div className='container'>
               <div className='search__result--wrapper'>
                    {
                        data.map(item => 
                            <div key={item.id} className='product__item--search'>
                                <Link to={`/products/${item.id}`}>
                                    <img className='product__img' src={item.images} alt="" />
                                </Link>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{trimDesc(item.description)}</p>
                                    <strong>${item.price}</strong>
                             </div>
                            </div>
                            )
                    }
               </div>
            </div>
        </section>
    );
}

export default Search;
