import { Audio } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

const AllProducts = ({ products, isLoading }) => {
  if (isLoading)
    return (
      <div className="min-h-[350px] flex items-center justify-center">
        <Audio
          height="100"
          width="100"
          color="#17A99A"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    );
  return (
    <div className=" mb-8 grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
