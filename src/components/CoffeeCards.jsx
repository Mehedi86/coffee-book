import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3">
                {coffees.map(coffee => <p key={coffee.id}>{coffee.name}</p>)}
            </div>
            <button className="btn" onClick={()=> navigate('/coffees')}>View All</button>
        </>

    );
};

export default CoffeeCards;