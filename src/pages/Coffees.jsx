import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data)

    const handleSort = sortBy => {
        if (sortBy == 'popularity') {
            const sortByPopularity = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sortByPopularity);
        }
        else if (sortBy == 'rating') {
            const sortByRating = [...data].sort((a, b) => b.rating - a.rating);
            setCoffees(sortByRating);
        }
    }

    return (
        <>
            <div className="md:flex justify-end py-2 m-2">
                <h1 className="md:text-2xl px-2 mr-2 border border-neutral-200 rounded">Sort Coffees by Popularity and Ratings {'->'}</h1>
                <div>
                    <button onClick={() => handleSort('popularity')} className="btn btn-xs sm:btn-sm md:btn-md mr-2">Sort By Popularity</button>
                    <button onClick={() => handleSort('rating')} className="btn btn-xs sm:btn-sm md:btn-md mr-2">Sort By Rating</button>
                </div>
            </div>
            <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
                {coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)}
            </div>
        </>
    );
};

export default Coffees;