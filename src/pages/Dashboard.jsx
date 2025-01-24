import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorite } from "../utils/localStorage";
import CoffeeCard from "../components/CoffeeCard";



const Dashboard = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoriteCoffees = getAllFavorites();
        setFavorites(favoriteCoffees);
    }, [])

    const deleteBtnHandler = (id) => {
        removeFavorite(id);
        const favoriteCoffees = getAllFavorites();
        setFavorites(favoriteCoffees);
    }

    return (
        <div>
            <div className="text-center my-16">
                <Heading title={'Welcome to Dashborad'}
                    subtitle={'Here you can see your favorite coffee'}>
                </Heading>
            </div>
            <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-6 my-4">
                {favorites.map(favorite => <CoffeeCard
                    key={favorite.id}
                    coffee={favorite}
                    deleteBtnHandler={deleteBtnHandler}>
                </CoffeeCard>)}
            </div>
        </div>
    );
};

export default Dashboard;