
import Banner from '../../components/Banner/Banner';
import CategoryTab from '../../components/category/CategoryTab';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <div className='text-center'>
            <CategoryTab></CategoryTab>
            </div>
        </div>
    );
};

export default Home;