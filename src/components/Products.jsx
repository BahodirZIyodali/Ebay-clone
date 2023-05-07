import React ,{useState,useEffect}from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const Products = ({likedProducts,setLikedProducts,addToBuy,setAddToBuy}) => {

  
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
 
   
    useEffect(() => {
      setLoading(true);
      fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);
  
    function trimDescription(str) {
      return str.split(" ").slice(0, 2).join(" ") + "...";
    }
  
    function addToLike(products) {
      setLikedProducts([...likedProducts, products]);
    }
  
    function addToCard(products) {
      setAddToBuy([...addToBuy, products]);
    }
  
    function removeFromLikeProducts(products) {
      setLikedProducts(
        likedProducts.filter((item) => item.id !== products.id)
      );
    }
  
    function removeFromShopProducts(products) {
      setAddToBuy(addToBuy.filter((item) => item.id !== products.id));
    }

  return (
       <div className="container">
       <h2 className="products__title">Most Searched Products</h2>
        <div className="main__products--wrapper">
          {!loading ? (
            data.map((products) => (
              <div key={products.id} className="products__item border">
                
                <Link to={`/products/${products.id}`}>
                  {products.images?.at(0) &&
                  products.images?.at(0).startsWith("https://") ? (
                    <img
                      className="product__item--img"
                      src={products.images?.at(0)}
                      alt=""
                    />
                  ) : (
                    <img
                      className="product__item--img"
                      src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
                      alt=""
                    />
                  )}
                  <h3>{products.title}</h3>
                </Link>
                <div className="product__info">
                  <div>
                    <p>{trimDescription(products.description)}</p>
                    <strong>${products.price}</strong>
                  </div>

                  {
                    addToBuy.find(p => p?.id === products?.id) ? <AiOutlineShoppingCart onClick={()=> removeFromShopProducts(products)} style={{color: 'blue', cursor: 'pointer'}}  /> : <AiOutlineShoppingCart style={{cursor: 'pointer'}} onClick={()=> addToCard(products)}  />
                  }
                      
                  {
                     likedProducts.find(p => p?.id === products?.id) ? <AiFillHeart onClick={() => removeFromLikeProducts(products)} style={{color: 'red', cursor: 'pointer'}} /> : <AiOutlineHeart style={{cursor: 'pointer'}} onClick={() => addToLike(products)} />
                  }
                </div>
              </div>
            ))
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
       </div>
  );
};

export default Products;
