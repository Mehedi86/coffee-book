import { useLoaderData } from "react-router-dom";

const Coffees = () => {
    const data = useLoaderData();

    return (
        <>
            <div className="flex justify-end m-2 py-2">
                <h1 className="text-2xl px-2 mr-2 border border-neutral-200 rounded">Sort Coffees by Popularity and Ratings {'->'}</h1>
                <div>
                    <button className="btn mr-2">Sort By Popularity</button>
                    <button className="btn mr-2">Sort By Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3">
                {data.map(coffee => <p key={coffee.id}>{coffee.name}</p>)}
            </div>
        </>
    );
};

export default Coffees;