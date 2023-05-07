import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
 
const Like = ({likedProducts,setLikedProducts}) => {

    const history = useNavigate();
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // go back one page in the history
    };
    function removeFromLikeProducts(item) {
      setLikedProducts((prevLikedProducts) =>
        prevLikedProducts.filter((product) => product.id !== item.id)
      );
  
      if (likedProducts.length === 1) {
        history.push("/");
      }
    }
  
    function trim(str) {
      return str?.split(" ").slice(0, 2).join(" ");
    }
  
    return !likedProducts.length ? <p className='note_liked_products'>No liked product!</p> : (
        <section >
            <div className='container'>
            <div>
      <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
    </div>
                <div className='d-flex justify-content-between flex-wrap gap-2 '>
                    {
                        likedProducts?.map(item => 
                            <div key={item.id} className='product__item--search'>
                                <Link to={`/products/${item?.id}`}>
                                    <img height={285} className='product__img' src={item.images} alt="" />
                                </Link>
                                <div className='product__item-info'>

                                    <div className='produc_desc'>
                                        <h2>{ trim(item?.title)}</h2>
                                        <p>{trim(item?.description)}</p>
                                    </div>

                                    <div className='product__price'>
                                        <strong className='like__price'>${item.price}</strong>
                                        <div className='like_heart'>
                                            <button className='btn__like-products'>Add to Card</button>
                                                {
                                                     likedProducts?.find(p => p?.id === item?.id) ? <AiFillHeart onClick={() => removeFromLikeProducts(item)} style={{color: 'red',  cursor: 'pointer'}} /> : <AiOutlineHeart/>
                                                }
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            )
                    }
                </div>
            </div>
           
        </section>
    );
}

export default Like;
