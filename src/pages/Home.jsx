import { Outlet, useLoaderData} from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner />
            <div className="text-center my-16">
                <Heading
                    title={'Browse Coffees by Category'}
                    subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}>
                </Heading>
            </div>
            <div className="flex justify-center my-12">
                <Categories categories={categories} />
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;