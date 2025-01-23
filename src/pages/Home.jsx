import Banner from "../components/Banner";
import Heading from "../components/Heading";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center my-16">
            <Heading
                title={'Browse Coffees by Category'}
                subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}>
            </Heading>
            </div>
        </div>
    );
};

export default Home;