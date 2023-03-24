import React from "react";
import CategoryCard from "@/Components/CategoryCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Categories from "./Categories";

const ProductCategories = (props) => {
  return (
    <React.Fragment>
       <div className=" grid grid-cols-2 gap-4">
        {/* <div className="  w-[500px]  space-y-7 ">  */}
          {/* <Card sx={{ display: "grid" }}>
          <CardContent sx={{ flex: "1 0 auto" }}> */}
                {/* <Typography className="" component="div" variant="h5"> */}
          {Categories.map((categorycard) => (
                  
                    <CategoryCard className="grid grid-cols-1" categorycard={categorycard} />
          ))}
                    {/* </Typography> */}
            </div> 
                  

        
      {/* </div>  */}
    </React.Fragment>
  );
};

export default ProductCategories;
