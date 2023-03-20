import React from "react";
import CategoryCard from "@/Components/Card";
import CardMedia from "@mui/material/CardMedia";

const ProductCategories = (props) => {
  return (
    <React.Fragment>
      <div className=" flex justify-evenly items-center  w-full h-[100vh]">
        <div className="  w-[500px]  space-y-7 ">
          <CategoryCard />

          <CategoryCard />
        </div>

        <div className="w-[500px] space-y-7">
          <CategoryCard />

          <CategoryCard />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCategories;
