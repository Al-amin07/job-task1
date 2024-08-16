import { Helmet } from "react-helmet-async";
import useAxiosCommon from "../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { useState } from "react";
import AllProducts from "./AllProducts";
import Search from "./Search";

const Home = () => {
  const itemPerPage = 9;
  const [start, setStart] = useState(1);
  const [totalItem, setTotalItem] = useState(0);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(100000);
  const [time, setTime] = useState(false);
  const axiosCommon = useAxiosCommon();
  const [price, setPrice] = useState( {minPrice: 0, maxPrice: 100000} );
  const [sort, setSort] = useState("");
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", start, sort, search, time, minPrice],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/all-products?start=${start}&sort=${sort}&search=${search}&time=${time}&minPrice=${minPrice}&maxPrice=${maxPrice}`
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
    setMinPrice(minPrice)
    const maxPrice = parseInt(e.target.max.value);
    setmaxPrice(maxPrice)
    setStart(1);
  };
console.log(price)
  return (
    <div className="mb-20">
      <Helmet>
        <title>Home | Trend Mart</title>
      </Helmet>
      <Search
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
