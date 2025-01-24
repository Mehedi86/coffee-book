import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = () => {
    const { id } = useParams();
    const allCoffeeData = useLoaderData();

    const [coffee, setCoffee] = useState({});

    const { category, image, name, origin, popularity, rating, type, making_process, description, ingredients } = coffee;

    useEffect(() => {
        const singleCoffee = allCoffeeData.find(coffee => coffee.id == id);
        setCoffee(singleCoffee);
    }, [allCoffeeData, id])

    return (
        <div className="container mx-auto border-2 border-neutral-200 m-4 rounded-lg">
            <div className="p-4 m-4">
                <img className="w-full md:h-[690px] rounded-lg" src={image} alt="" />
            </div>
            <div className="px-2">
                <div className="p-4 m-4 flex justify-between items-center">
                <h1 className="text-4xl font-semibold"> Coffee Name: {name}</h1>
                <button className="btn btn-lg btn-warning text-white">Add to Favorites</button>
                </div>
                <div className="px-4 mx-4">
                    <div className="text-2xl font-semibold text-neutral-400 pt-2">
                        <p className="py-1">Category: {category}</p>
                        <p className="py-1">Origin: {origin}</p>
                        <p className="py-1">Category: {type}</p>
                    </div>
                    <div className="text-2xl font-semibold text-amber-400">
                        <p className="py-1">Rating: {rating}</p>
                        <p className="py-1">Popularity: {popularity}</p>
                    </div>
                </div>
                <div className="px-4 py-2 mx-4 flex text-orange-600">
                    {ingredients ? (ingredients.map((ingredient, id)=> <p className="pr-2" key={id}>#{ingredient}</p>)): ''}
                    
                </div>
                <div className="mx-2 mb-12">
                    <div className="shadow-xl p-6 text-lg rounded-lg">
                        <p className="font-bold">Description</p>
                        <p>{description}</p>
                    </div>
                    <div className="shadow-xl p-6 text-lg rounded-lg">
                        <p className="font-bold">Making Process</p>
                        <p>{making_process}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;