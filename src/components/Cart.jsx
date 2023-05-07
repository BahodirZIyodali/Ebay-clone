import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Cart = ({setAddToBuy,addToBuy}) => {
  const history = useNavigate();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // go back one page in the history
  };
  function trimDescription(str) {
    return str.split(" ").splice(0, 10).join(" ") + "...";
  }

  function removebyShops(products){
    const newAddToBuy = addToBuy.filter(item => item.id !== products.id);
    setAddToBuy(newAddToBuy);

    if(newAddToBuy.length === 0) history.push('/');
  }

  return !addToBuy.length ? <p className="shop_card">No cards!</p> : (
    <section>
      <div className="container">
      <div>
      <button onClick={handleGoBack} className="btn btn-primary">Go back</button>
    </div>
        <div className="main__products--wrapper">
          {addToBuy?.map((products) => (
            <div key={products.id} className="products__item">
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
                    addToBuy.find((p) => p?.id === products?.id) ?  <AiOutlineShoppingCart onClick={() => removebyShops(products)} style={{ cursor: "pointer", color: "red" }}/> : <AiOutlineShoppingCart />
                }

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
