import { Carousel } from 'antd';
import { Fragment} from 'react';

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%',
  backgroundRepeat: "no-repeat"
};

const HomeCarousel = () => {
    return(
        <Fragment>
            <Carousel autoplay effect="fade">
                <div>
                    <div style={{...contentStyle, backgroundImage: `url('https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg')`}}>1</div>
                </div>
                <div>
                    <div style={{...contentStyle, backgroundImage: `url('https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg')`}}>1</div>
                </div>
                <div>
                    <div style={{...contentStyle, backgroundImage: `url('https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg')`}}>1</div>
                </div>
            </Carousel>
        </Fragment>
    )
}
export default HomeCarousel;