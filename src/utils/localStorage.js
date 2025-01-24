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

export { getAllFavorites, addFavorite }