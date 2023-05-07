import React from "react";
import { Link } from "react-router-dom";
import UseFetchData from "../hooks/UseFetchdata";
const Categories = () => {
  const [categoryData, setCategoryData] = UseFetchData("/categories?offset=0&limit=5");

  return (
    <section className="categories">
      <h3 className="categories__title">Producs Categories</h3>
      <div className="categories__wrapper">
        {categoryData.map((item) => (
          <Link
            to={`/category/${item.id}`}
            className="category-wrap"
            key={item.id}
          >
            <div className="categories__img">
              <img className="" src={item.image} alt="" />
            </div>
            <h2>{item.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
