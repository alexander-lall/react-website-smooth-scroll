import Hero from '../../components/hero/hero.component';
import Info from '../../components/info/info.component';
import Services from '../../components/services/services.component';

import { homeObjOne, homeObjThree, homeObjTwo } from '../../components/info/data';

const Home = () => {
    return (
        <>
            <Hero />
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Services />
            <Info {...homeObjThree}/> 
        </>
    )
}

export default Home;