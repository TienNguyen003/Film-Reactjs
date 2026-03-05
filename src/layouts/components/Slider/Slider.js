import { Carousel } from 'rsuite';
import 'rsuite/Carousel/styles/index.css';

export default function Slider() {
    return (
        <Carousel placement="bottom" shape="bar" className="custom-slider" autoplay autoplayInterval={2000} style={{height: '500px'}}>
            <img src="https://img.ophim.live/uploads/movies/nguyet-dao-di-gioi-phan-2-poster.jpg" />
            <img src="https://img.ophim.live/uploads/movies/nguyet-dao-di-gioi-phan-2-poster.jpg" />
            <img src="https://img.ophim.live/uploads/movies/nguyet-dao-di-gioi-phan-2-poster.jpg" />
            <img src="https://img.ophim.live/uploads/movies/nguyet-dao-di-gioi-phan-2-poster.jpg" />
            <img src="https://img.ophim.live/uploads/movies/nguyet-dao-di-gioi-phan-2-poster.jpg" />
        </Carousel>
    );
}
