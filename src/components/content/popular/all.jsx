import Footer from '../../../widgets/footer/footer';
import Welcome from '../Welcome/Welcome';
import Popular from './popular';
import TopRated from './topRated';
import TrendingNow from './trendingNow';
import Upcoming from './upcoming';

const All = () => {

    return (
        <>
            <div className='relative flex flex-col'>
                <div className='absolute top-0 w-full'>
                    <Welcome />
                </div>
                <div className='flex flex-col relative top-[850px]'>
                    <TrendingNow/>
                  
                    <Popular/>
                    
                    <TopRated/>
                   
                    <Upcoming/>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default All;
