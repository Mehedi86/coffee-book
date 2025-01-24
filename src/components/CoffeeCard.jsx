
const CoffeeCard = ({ coffee }) => {
    const { category, image, name, origin, popularity, rating, type, making_process, description } = coffee;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img className=" w-full h-64" src={image} />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">Name: {name}</h2>
                <div className="font-semibold text-neutral-600">
                    <p>Category: {category}</p>
                    <p>Oringin: {origin}</p>
                    <p>Type: {type}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;