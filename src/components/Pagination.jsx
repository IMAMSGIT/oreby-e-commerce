import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const Pagination = ({ itemsPerPage, products }) => {
  // const items = products;

  // function Items({ currentItems }) {
  //   return (
  //     <div className="flex flex-wrap">
  //       {currentItems &&
  //         currentItems.map((item) => (
  //           <div>
  //             <Product pInfo={item} pImage={item.thumbnail} isNew={false} />
  //           </div>
  //         ))}
  //     </div>
  //   );
  // }
  // // Here we use item offsets; we could also use page offsets
  // // following the API or data you're working with.
  // const [itemOffset, setItemOffset] = useState(0);

  // // Simulate fetching items from another resources.
  // // (This could be items from props; or items loaded in a local stat
  // // from an API endpoint with useEffect and useState)
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  //   return (
  //     <>
  //       <Items currentItems={currentItems} />
  //       <ReactPaginate
  //         breakLabel="..."
  //         nextLabel="next >"
  //         onPageChange={handlePageClick}
  //         pageRangeDisplayed={5}
  //         pageCount={pageCount}
  //         previousLabel="< previous"
  //         renderOnZeroPageCount={null}
  //         pageClassName="inline-block"
  //       />
  //     </>
  //   );
  // };

  const items = products;

  function Items({ currentItems }) {
    return (
      <div className="flex flex-wrap gap-5">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Product pInfo={item} pImage={item.thumbnail} isNew={false} />
            </div>
          ))}
      </div>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex items-center justify-between font-normal text-secondary">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          pageClassName="py-3 px-4 border border-secondary "
          containerClassName="flex gap-3 items-center ml-[-10px] mt-[50px]"
          activeClassName="bg-primary text-white"
        />
        <p>
          Products from {itemOffset + 1} to {endOffset} of {products.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;
