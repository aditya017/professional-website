import { useAppSelector } from '../../store/hooks.ts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AttentionSeeker } from 'react-awesome-reveal';
import './AboutMeInDepth.scss';

const AboutMeInDepth = () => {
  const isItBright = useAppSelector((state) => state.isItDay.isItDay);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <AttentionSeeker effect='rubberBand' duration={1000}>
          <div>
            <h3
              className='HdrSty'
              style={{ color: isItBright ? '#F5F5DC' : '#b7b6de' }}
            >
              Engineering
            </h3>
            <p className='textSty'>
              JavaScript developer with a master's degree in computer science.
              Experienced in building complex <br />
              systems by understanding user needs. Delivers fast, resilient
              solutions optimized for scale. Performance, scalability,
              Accessibility,SEO , Security and Code efficiency are priorities.
            </p>
          </div>
        </AttentionSeeker>
        <AttentionSeeker effect='rubberBand' duration={1000}>
          <div>
            <h3
              className='HdrSty'
              style={{ color: isItBright ? '#F5F5DC' : '#b7b6de' }}
            >
              Design
            </h3>
            <p className='textSty'>
              {' '}
              I focus on creating accessible, user-friendly designs that are
              visually
              <br /> appealing, consistent, and responsive, while also ensuring
              good performance and alignment with the brand's
              <br /> identity. It's also essential to keep up-to-date with
              design trends and prioritize user experience above all.
            </p>
          </div>
        </AttentionSeeker>
      </Slider>
    </div>
  );
};

export default AboutMeInDepth;
