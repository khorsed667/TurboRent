import Banner from '../Banner/Banner';
import CarType from '../CarType/CarType';
import Number from '../Number/Number';
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
            <CarType></CarType>
            <Number></Number>
        </div>
    );
};

export default Home;