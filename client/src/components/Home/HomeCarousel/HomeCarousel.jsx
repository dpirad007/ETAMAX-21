import { Carousel } from 'antd';
import { Fragment} from 'react';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '100%'
};

const HomeCarousel = () => {
    return(
        <Fragment>
            <Carousel effect="fade">
                <div>
                    <h3  style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3  style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3  style={contentStyle}>3</h3>
                </div>
            </Carousel>
        </Fragment>
    )
}
export default HomeCarousel;