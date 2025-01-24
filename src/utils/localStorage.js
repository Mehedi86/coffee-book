// get item from loacal storage if exist
const getAllFavorites = () => {
    const favoriteCoffees = localStorage.getItem('favorites');
    if (favoriteCoffees) {
        return JSON.parse(favoriteCoffees);
    }
    return [];
}

// add favorite item to the localStorage
const addFavorite = (coffee) =>{
    const previousFavorite = getAllFavorites();
    previousFavorite.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(previousFavorite));
}

// remove favorite item from localStorage

const removeFavorite = (id) =>{
    const favorites = getAllFavorites();
    const remaining = favorites.filter(favorite => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
}

export { getAllFavorites, addFavorite, removeFavorite }