import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import Search from '../Search/Search';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <Search></Search>
            <Works></Works>
            <Popular></Popular>
        </div>
    );
};

export default Home;