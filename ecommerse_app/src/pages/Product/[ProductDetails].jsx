import React from 'react'
import RatingProduct from '@/Components/RatingProduct'
import Products from '../Products'
import { useRouter } from 'next/router'


// export const getStaticPaths = ()=>{
//     const paths = Products.map(product=>{
//         return {
//             params: {id: product._id}
//         }
//       })

//       return {
//         paths,
//         fallback: false
//       }
      
// }

// export const getStaticProps = (context)=>{
//     const id = context.params.id
//     const productData = Products
//     const data = Products

//     return {
//         props: {product: data}
//     }

// }



const ProductDetails = () => {
    
   
    const product_id = useRouter().query.ProductDetails
    
  const product = Products.find((p)=> p._id === product_id)


   


    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center h-screen'>
            <div className='flex  gap-6 lg:w-2/4'>
                <img src={product.image} alt="" className=' ml-[6rem] w-[450px] h-[450px] aspect-square object-cover rounded-xl'/>
                {/* <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div> */}
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4 mr-[7rem]'>
                <div className=''>
                    <span className=' text-violet-600 font-semibold'>Hot Product</span>
                    <h1 className='text-3xl font-bold'>{product.name}</h1>
                </div>
                <p className='text-gray-700'>
                {product.description}
                </p>

                <div className=''>
                    
                    <RatingProduct value={product.rating} text={`  ${product.numReviews}  Reviews`}/>
                </div>
                <h6 className='text-2xl font-semibold'>$ {product.price}</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-600 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>2</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-600 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-violet-600 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;

