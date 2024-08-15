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
    const [start, setStart] = useState(1)
    const [totalItem, setTotalItem] = useState(0);
    const axiosCommon = useAxiosCommon();
    const { data : products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', start],
        queryFn: async() => {
            const { data } = await axiosCommon.get(`/all-products?start=${start}`)
            setTotalItem(data.totalResult)
            return data.result
        }

    })
    const totalPage = Math.ceil(totalItem / itemPerPage)
    
    const pages = [...Array(totalPage).keys()].map((i) => i + 1);
    return (
        <div className="mb-20">
            <Helmet>
                <title>Home | Trend Mart</title>
            </Helmet>
            <Search />

            <AllProducts products={products} isLoading={isLoading}/>

            <Pagination pages={pages} start={start} setStart={setStart} />
           
        </div>
    );
};

export default Home;