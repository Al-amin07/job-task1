import { Helmet } from "react-helmet-async";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useState } from "react";
import AllProducts from "./AllProducts";
import Search from "./Search";
import toast from "react-hot-toast";

const Home = () => {
  const itemPerPage = 9;
  const [start, setStart] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(100000);
  const [time, setTime] = useState(false);
  const axiosCommon = useAxiosCommon();
  const [priceRange, setPriceRange] = useState(0)
  const [sort, setSort] = useState("");
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", start, sort, search, time, priceRange, category, brand],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/all-products?start=${start}&sort=${sort}&search=${search}&time=${time}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&brand=${brand}`
      );
      setTotalItem(data.totalResult);
      return data.result;
    },
  });
  const totalPage = Math.ceil(totalItem / itemPerPage);

  const pages = [...Array(totalPage).keys()].map((i) => i + 1);
  console.log(sort);
  const searchFunc = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    setStart(1);
    setSearch(e.target.search.value);
  };
  const handleTime = () => {
    console.log(time);
    setTime(!time);
  };

  const handleRange = async (e) => {
    e.preventDefault();

    const minPrice = parseInt(e.target.min.value);
    const maxPrice = parseInt(e.target.max.value);
    if(minPrice < 0) {
      toast.error('Please Enter valid Price Range')
      return 
    }
    if(minPrice > maxPrice) {
      toast.error('Please Enter valid Price Range')
      return 
    }
    setMinPrice(minPrice)
    setmaxPrice(maxPrice)
    setPriceRange(priceRange + 1)
    setStart(1);
  };
  const resetAll = () => {
    console.log('ress')
    setStart(1);
    setSearch('')
    setMinPrice(0)
    setmaxPrice(100000)
    setSort('')
    setCategory('')
    setBrand('')

  }

  return (
    <div className="mb-20">
      <Helmet>
        <title>Home | Trend Mart</title>
      </Helmet>
      <Search
        setBrand={setBrand}
        category={category}
        brand={brand}
        setCategory={setCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setminPrice={setMinPrice}
        setmaxPrice={setmaxPrice}
        resetAll={resetAll}
        handleRange={handleRange}
        setSort={setSort}
        handleTime={handleTime}
        searchFunc={searchFunc}
      />

      <AllProducts products={products} isLoading={isLoading} />

      <Pagination pages={pages} start={start} setStart={setStart} />
    </div>
  );
};

export default Home;
