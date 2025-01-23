import { NavLink } from "react-router-dom"

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lift">

            {categories.map(category => (
                <NavLink to={`/category/${category.category}`} key={category.category} role='tab' className={({isActive}) => `tab text-2xl ${isActive ? 'tab-active' : ''}`}>
                    {category.category}
                </NavLink>
            ))}
        </div>
    );
};

export default Categories;