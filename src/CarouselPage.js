import Carousel from 'react-bootstrap/Carousel';

function CarouselPage(){
    return(
        <div>
          <Carousel  data-bs-theme="dark">
            <Carousel.Item>
                <img
                  className="style d-block  mt-4"
                  src="image/book1.jpg"
                  alt="First slide"
                />
                
              {/* <Carousel.Caption><h5>Movie1</h5></Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="style d-block  mt-4"
                src="image/book2.jpg"
                alt="Second slide"
              />
             
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="style d-block  mt-4"
                src="image/book3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>

          </Carousel>
        </div>
    )
}
export default CarouselPage;