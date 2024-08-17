
const ProductCard = ({product}) => {
    return (
        <div  className="block hover:scale-105 w-[400px] shadow-xl p-3">
        <img
          alt=""
          src={product.productImage}
          className=" h-52 filter shadow-lg shadow-custom-red rounded-lg  w-full object-cover "
        />
      
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{product.productName}</h3>
      <h2 className=" text-slate-500">Category : {product.category}</h2>
      <h2 className="text-slate-950">Brand : {product.brandName}</h2>
     <div className="flex mt-3 justify-between items-center">
     <p className=" text-gray-700 text-2xl font-semibold">
         ${product.price}
        </p>
        <p className="text-xl font-bold">{product.ratings}</p>
     </div>
      </div>
    );
};

export default ProductCard;