import Banner from '../Banner/Banner';
import Search from '../Search/Search';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <Search></Search>
            <Works></Works>
        </div>
    );
};

export default Home;