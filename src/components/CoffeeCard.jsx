import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";

const CoffeeCard = ({ coffee, deleteBtnHandler }) => {
    const { category, image, name, origin, id, popularity, rating, type } = coffee;

    const location = useLocation();
    return (

        <div className="transition hover:scale-105 relative">
            <Link to={`/coffee/${id}`} >
                <div className="card bg-base-100 shadow-sm overflow-hidden">
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
                    </div>
                </div>
            </Link>
            {(location.pathname === '/dashboard') && <div onClick={() => deleteBtnHandler(id)} className="absolute -top-4 -right-4 p-3 bg-warning rounded-full cursor-pointer">
                <FaRegTrashAlt />
            </div>}

        </div>
    );
};

export default CoffeeCard;

