
import { useEffect, useState } from "react";
import Banner from '../../components/banner/Baner.jsx'
import Preloader from '../../components/preloader/index.jsx'
import Image1 from '../../assets/hero2.jpg'
import Image2 from '../../assets/hero2b.jpg'
import Image3 from '../../assets/hero2c.jpg'


const image = { Image1, Image2, Image3 }

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
            <div>
                {loading ? <Preloader /> : <></>}
                <Banner image={image} />
            </div>
    );
}

export default Home;
