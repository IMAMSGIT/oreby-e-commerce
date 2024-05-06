import React, { useState } from "react";
import Category from "./Category";

const ShopByCategory = () => {
  return (
    <div>
      <h2 className="text-xl font-bold text-primary mb-[35px]">
        Shop by Category
      </h2>
      <Category categoryName="Category 1" subCategoryShow={true} />
      <Category categoryName="Category 2" subCategoryShow={false} />
      <Category categoryName="Category 3" subCategoryShow={false} />
    </div>
  );
};

export default ShopByCategory;
