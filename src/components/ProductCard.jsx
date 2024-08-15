
const ProductCard = ({product}) => {
    return (
        <div  className="block shadow-xl p-3">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="h-64 w-full object-cover sm:h-80 "
        />
      
        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{product.productName}</h3>
      
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