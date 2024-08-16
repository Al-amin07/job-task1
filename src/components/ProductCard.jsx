
const ProductCard = ({product}) => {
    return (
        <div  className="block shadow-xl p-3">
        <img
          alt=""
          src={product.productImage}
          className="h-64 w-full object-cover sm:h-80 "
        />
      
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{product.productName}</h3>
      
     <div className="flex mt-3 justify-between items-center">
     <p className=" text-gray-700 text-2xl font-semibold">
         ${product.price}
        </p>
        <p className="text-xl font-bold">{product.ratings}</p>
        <p className="text-xl font-bold">{`${new Date(product.creationDate).getDate()}/${new Date(product.creationDate).getHours()}`}</p>
     </div>
      </div>
    );
};

export default ProductCard;