import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
    const { category } = useParams();
    const data = useLoaderData();
    const navigate = useNavigate();

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredCoffees = [...data].filter(coffee => coffee.category === category);
            setCoffees(filteredCoffees);
        }
        else {
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])

    return (
        <>
            <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
                {coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee}></CoffeeCard>)}
            </div>
            <button className="btn" onClick={() => navigate('/coffees')}>View All</button>
        </>

    );
};

export default CoffeeCards;