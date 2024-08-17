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
    <div className="px-4 md:px-1 mb-8 grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        products && products.length > 0 ? products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
        :
        <div className="min-h-[400px] lg:col-span-3 w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-medium text-center">No Data Available</h2>
          <h2 className="text-lg  text-center text-slate-500">Please Select Other Category</h2>
        </div>
      }
    </div>
  );
};

export default AllProducts;
