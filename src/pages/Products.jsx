import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaListOl } from "react-icons/fa";
import { MdOutlineGridView } from "react-icons/md";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Pagination from "../components/Pagination";
import ShopByCategory from "../components/ShopByCategory";
import ShopbyColor from "../components/ShopbyColor";
import ShopbyBrand from "../components/ShopbyBrand";
import ShopbyPrice from "../components/ShopbyPrice";

const Products = () => {
  let [products, setProducts] = useState([]);
  let [perPage, setPerPage] = useState(6);
  useEffect(() => {
    function getProducts() {
      axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
      });
    }
    getProducts();
  }, []);
  const handlePerPage = (e) => {
    setPerPage(e.target.value);
  };
  return (
    <div>
      <Container>
        <Breadcrumb />
        {/* //* For Left and Right div  */}
        <Flex className="gap-10 mt-[100px]">
          {/* //* Left div  */}
          <div className="w-[20%]">
            <ShopByCategory />
            <ShopbyColor />
            <ShopbyBrand />
            <ShopbyPrice />
          </div>
          {/* //* Right div  */}
          <div className="w-[80%]">
            <div className="flex justify-between w-full">
              {/* //* Only for 2 view by icons */}
              <div>
                <div className="inline-block p-3 text-white duration-200 border border-transparent hover:border hover:border-primary bg-primary hover:text-primary hover:bg-white">
                  <FaListOl />
                </div>
                <div className="inline-block p-3 ml-5 text-white duration-200 border border-transparent hover:border hover:border-primary bg-primary hover:text-primary hover:bg-white">
                  <MdOutlineGridView />
                </div>
              </div>
              <div>
                <div className="flex gap-10">
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="countries"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Sort by:
                    </label>
                    <select
                      id="countries"
                      className="whitespace-nowrap w-[229px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block
                  p-2.5 "
                    >
                      <option selected>Choose a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="countries"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Show:
                    </label>
                    <select
                      onChange={handlePerPage}
                      id="countries"
                      className="whitespace-nowrap w-[139px] bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block
                  p-2.5 "
                    >
                      <option value={6}>6</option>
                      <option value={12}>12</option>
                      <option value={18}>18</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <section className="mt-15">
              <Pagination itemsPerPage={perPage} products={products} />
              {/* <Flex className="flex-wrap justify-between">
                {products.map((productItem) => (
                  <div>
                    <Product
                      pInfo={productItem}
                      pImage={productItem.thumbnail}
                      isNew={false}
                    />
                  </div>
                ))}
              </Flex> */}
            </section>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Products;
