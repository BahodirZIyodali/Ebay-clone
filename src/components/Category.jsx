import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UseFetchData from '../hooks/UseFetchdata';


const Category = () => {
    const categoryId = useParams()
    const [data, isLoading] = UseFetchData(`/categories/${categoryId.id}/products`);
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // go back one page in the history
    };
    const trimDesc = (str) => {
        return str?.split(" ").splice(0, 3).join(" ") + '...'
    };
    const trimTitle = (str) => {
        return str?.split(" ").splice(0, 2).join(" ") + '...'
    };
    return (
        <section className='by__category'>
            <div className='container'>
            <div>
      <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
    </div>
                <div className='single__category--wrapper'>
                    {
                        data.map(category => 
                            <div key={category.id} className='category__item--products border'>
                                <Link to={`/products/${category.id}`}>
                                    <img className='category__img' src={category.images} alt="" />
                                </Link>
                                <div>
                                    <h2>{trimTitle(category.title)}</h2>
                                    <p>{trimDesc(category.description)}</p>
                                    <strong>${category.price}</strong>
                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
        </section>
    );
}

export default Category;
