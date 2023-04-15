import React from "react";
import CategoryCard from "@/Components/CategoryCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Categories from "./Categories";

import Link from "next/link";
import ElectronicProducts from "./ElectronicProducts";

const ProductCategories = (props) => {

  
  return (
    <React.Fragment>
       <div className=" grid grid-cols-2 place-content-center gap-4">
        
          {Categories.map((categorycard) => (
                  
                  <Link href="/ElectronicProducts"><CategoryCard className="grid grid-cols-1 place-content-center" categorycard={categorycard}/></Link>
          ))}
                   
            </div> 
                  

        
      {/* </div>  */}
    </React.Fragment>
  );
};

export default ProductCategories;
