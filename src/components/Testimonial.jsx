import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial1 from '../img/testimonial-1.jpg';
import testimonial2 from '../img/testimonial-2.jpg';
import testimonial3 from '../img/testimonial-3.jpg';
import testimonial4 from '../img/testimonial-4.jpg';

const testimonials = [
  {
    img: testimonial1,
    text: 'Simplified Knowledge Partners transformed our data into valuable insights that drove our business forward. Highly recommended!',
    name: 'John Doe',
    profession: 'Business Analyst',
  },
  {
    img: testimonial2,
    text: 'Their research and analysis provided us with the clarity we needed to make informed decisions. Exceptional service!',
    name: 'Jane Smith',
    profession: 'Marketing Manager',
  },
  {
    img: testimonial3,
    text: 'The team at Simplified Knowledge Partners is incredibly professional and delivered results that exceeded our expectations.',
    name: 'Michael Johnson',
    profession: 'CEO',
  },
  {
    img: testimonial4,
    text: 'Their market insights were instrumental in helping us refine our strategy and achieve our goals.',
    name: 'Emily Davis',
    profession: 'Project Manager',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Show 2-3 testimonials per page
  slidesToScroll: 1,
  autoplay: true,            // Enable automatic sliding
  autoplaySpeed: 3000,       // Slide every 3 seconds
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonial = () => (
  <div className="container-xxl pt-5">
    <div className="container">
      <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s"
        style={{ maxWidth: '500px' }}>
        <p className="fs-5 fw-medium text-primary">Testimonial</p>
        <h1 className="display-5 mb-5">What Clients Say About Our Services!</h1>
      </div>
      <Slider {...settings} className="testimonial-carousel wow fadeInUp border" data-wow-delay="0.1s">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item rounded p-4 p-lg-5 mb-5">
            {/* <img className="mb-4" src={testimonial.img} alt={`Testimonial from ${testimonial.name}`} /> */}
            <h5>{testimonial.name}</h5>
            <span className="text-primary">{testimonial.profession}</span>
            <p className="mb-4">{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  </div>
);

export default Testimonial;
