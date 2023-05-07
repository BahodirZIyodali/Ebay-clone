import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchData from "../hooks/UseFetchdata";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const Product = ({likedProducts,setLikedProducts,addToBuy,setAddToBuy}) => {
 



  const productIdData = useParams();

  const [data, setLoading] = useFetchData(`/products/${productIdData.id}`);


  function addToLike(products) {
    setLikedProducts([...likedProducts, products]);
  }
  function removeFromLikeProducts(data) {
    const newLikedProducts = likedProducts.filter(
      (product) => product.id !== data.id
    );
    setLikedProducts(newLikedProducts);
  }
  function addToCard(products) {
    setAddToBuy([...addToBuy, products]);
  }
  function removeFromShopProducts(products) {
    setAddToBuy(addToBuy.filter((item) => item.id !== products.id));
  }
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // go back one page in the history
  };

  return (
    <section className="single__product">
      <div className="container">
      <div>
      <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
    </div>
        <div className="product__wrapper">
          {data.images?.at(0) && data.images?.at(0).startsWith("https://") ? (
            <img
              className="single__product--img"
              src={data.images?.at(0)}
              alt="img"
            />
          ) : (
            <img
              className="single__product--img"
              src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
              alt=""
            />
          )}

          <div className="product__item--info">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <strong>${data.price}</strong>
            <div className="like_heart">
              {addToBuy.find((p) => p?.id === data?.id) ? (
                <AiOutlineShoppingCart
                  onClick={() => removeFromShopProducts(data)}
                  style={{ color: "blue", cursor: "pointer" }}
                />
              ) : (
                <AiOutlineShoppingCart
                  style={{ cursor: "pointer" }}
                  onClick={() => addToCard(data)}
                />
              )}
              {likedProducts.find((p) => p?.id === data?.id) ? (
                <AiFillHeart
                  onClick={() => removeFromLikeProducts(data)}
                  style={{ color: "red", cursor: "pointer" }}
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => addToLike(data)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
