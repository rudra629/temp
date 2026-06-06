import { useRef, useState } from 'react'
import Slider from 'react-slick'

/* -------------------------------------------------------
   Product data  (mirrors original HTML exactly)
   ------------------------------------------------------ */
const products = [
  {
    img: 'https://www.bazana.in/uploads/roasted-salted-almond/Bazana-Roasted-Salted-Almonds-Pack-Front.jpg',
    alt: 'Healthy crispy snacks',
    h3: 'ROASTED SALTED', h2: 'ALMONDS\u00a0!',
    p: 'Roasted and salted to perfection, these almonds will give you the extra kick you need !',
    link: 'https://www.bazana.in/your-snack-details/roasted-salted-almond',
    gradient: 'linear-gradient(124deg, #01A7E3, #0187CE, #01A7E3)',
    colour: '#01A7E3',
    topLeft:      'https://www.bazana.in/uploads/roasted-salted-almond/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/roasted-salted-almond/nut-top-right-fitnessicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-salted-almond/nut-top-right-chaiicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-salted-almond/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/roasted-salted-cashew/Bazana-Roasted-Salted-Cashews-Pack-Front.jpg',
    alt: 'Dry roasted snacks',
    h3: 'ROASTED SALTED', h2: 'CASHEWS\u00a0!',
    p: 'Sweet notes of cashews along with proper salt and roast will prepare you for a power packed day ahead !',
    link: 'https://www.bazana.in/your-snack-details/roasted-salted-cashew',
    gradient: 'linear-gradient(124deg, #00BBE8, #008CC1, #00BBE8)',
    colour: '#00BBE8',
    topLeft:      'https://www.bazana.in/uploads/roasted-salted-cashew/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/roasted-salted-cashew/nut-top-right-chaiicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-salted-cashew/nut-bottom-right-tiffinicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-salted-cashew/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/roasted-salted-pistachio/Bazana-Roasted-Salted-Pistachios-Pack-Front.jpg',
    alt: 'Roasted nut snacks',
    h3: 'ROASTED SALTED', h2: 'PISTACHIOS\u00a0!',
    p: 'Inshell pistachios roasted and salted is a playful pastime and the perfect hunger buddy you were in search of !',
    link: 'https://www.bazana.in/your-snack-details/roasted-salted-pistachio',
    gradient: 'linear-gradient(124deg, #55C5D9, #01ABCC, #55C5D9)',
    colour: '#55C5D9',
    topLeft:      'https://www.bazana.in/uploads/roasted-salted-pistachio/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/roasted-salted-pistachio/nut-top-right-chaiicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-salted-pistachio/nut-bottom-right-justcozicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-salted-pistachio/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/roasted-salted-pumpkin-seeds/Bazana-Roasted-Salted-Pumpkin-Seeds-Pack-Side.jpg',
    alt: 'Roasted snacks near me',
    h3: 'ROASTED SALTED', h2: 'PUMPKIN SEEDS\u00a0!',
    p: 'These roasted crunchy and appropriately salty Pumpkin Seeds are bound to create a flavor explosion in your mouth! Might as well buy two packs !',
    link: 'https://www.bazana.in/your-snack-details/roasted-salted-pumpkin-seeds',
    gradient: 'linear-gradient(124deg, #518FCC, #006FB7, #518FCC)',
    colour: '#518FCC',
    topLeft:      'https://www.bazana.in/uploads/roasted-salted-pumpkin-seeds/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/roasted-salted-pumpkin-seeds/nut-top-right-fitnessicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-salted-pumpkin-seeds/nut-bottom-right-tiffinicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-salted-pumpkin-seeds/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/roasted-salted-sunflower-seeds/Bazana-Roasted-Salted-Sunflower-Seeds-Pack-Side.jpg',
    alt: 'Healthy Roasted snacks',
    h3: 'ROASTED SALTED', h2: 'SUNFLOWER SEEDS\u00a0!',
    p: 'Experience a whole new snack, Roasted & Salted Sunflower Seeds that will take your taste buds by surprise!',
    link: 'https://www.bazana.in/your-snack-details/roasted-salted-sunflower-seeds',
    gradient: 'linear-gradient(124deg, #00A3D8, #007BB6, #00A3D8)',
    colour: '#00A3D8',
    topLeft:      'https://www.bazana.in/uploads/roasted-salted-sunflower-seeds/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/roasted-salted-sunflower-seeds/nut-top-right-fitnessicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-salted-sunflower-seeds/nut-top-right-chaiicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-salted-sunflower-seeds/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/trail-mix-cranberry-fusion/Bazana-Trail-Mix-Cranberry-Fusion-Pack-Front.jpg',
    alt: 'Roasted snacks for weight loss',
    h3: 'TRAIL MIX', h2: 'CRANBERRY FUSION\u00a0!',
    p: 'Cranberry Fusion with a delicious mix of hand-picked cranberries, almonds and cashews will make your mouth water every time you see it !',
    link: 'https://www.bazana.in/your-snack-details/trail-mix-cranberry-fusion',
    gradient: 'linear-gradient(124deg, #F0617D, #DA1A33, #F0617D)',
    colour: '#F0617D',
    topLeft:      'https://www.bazana.in/uploads/trail-mix-cranberry-fusion/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/trail-mix-cranberry-fusion/nut-top-right-tiffinicon.png',
    bottomRight:  'https://www.bazana.in/uploads/trail-mix-cranberry-fusion/nut-bottom-right-studyicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/trail-mix-cranberry-fusion/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/roasted-unsalted-almond/Bazana-Roasted-Unsalted-Almonds-Pack-Front.png',
    alt: 'Healthy crispy snacks',
    h3: 'ROASTED UNSALTED', h2: 'ALMONDS\u00a0!',
    p: 'Roasted to perfection, these almonds will deliver you the extra punch you need!',
    link: 'https://www.bazana.in/your-snack-details/roasted-unsalted-almond',
    gradient: 'linear-gradient(124deg, #FF9015, #F16C00, #FF9015)',
    colour: '#FF9015',
    topLeft:      'https://www.bazana.in/uploads/roasted-unsalted-almond/nut-top-left.png',
    topRight:     'https://www.bazana.in/uploads/roasted-unsalted-almond/nut-top-right-fitnessicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-unsalted-almond/nut-top-right-chaiicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-unsalted-almond/nut-bottom-left.png',
  },
  {
    img: 'https://www.bazana.in/uploads/roasted-unsalted-cashews/Bazana-Roasted-Unsalted-Cashews-Pack-Front.png',
    alt: 'Dry roasted snacks',
    h3: 'ROASTED UNSALTED', h2: 'CASHEWS\u00a0!',
    p: 'Crunchy cashews combined with proper roast will prepare you for a smashing day ahead!',
    link: 'https://www.bazana.in/your-snack-details/roasted-unsalted-cashews',
    gradient: 'linear-gradient(124deg, #FCB24C, #FF8300, #FCB24C)',
    colour: '#FCB24C',
    topLeft:      'https://www.bazana.in/uploads/roasted-unsalted-cashews/Bazana-Roasted-Salted-Cashews-02.png',
    topRight:     'https://www.bazana.in/uploads/roasted-unsalted-cashews/nut-top-right-chaiicon.png',
    bottomRight:  'https://www.bazana.in/uploads/roasted-unsalted-cashews/nut-bottom-right-tiffinicon.png',
    bottomLeft:   'https://www.bazana.in/uploads/roasted-unsalted-cashews/Bazana-Roasted-Unsalted-Cashews-01.png',
  },
]

// Custom arrow components — destructure & discard slick-injected props
// to prevent React "unrecognised DOM prop" warnings
function PrevArrow({ onClick, colour }) {
  return (
    <button className="slick-prev-btn" style={{ color: colour }} onClick={onClick} aria-label="Previous">
      <i className="fa fa-chevron-left" aria-hidden="true" />
    </button>
  )
}
function NextArrow({ onClick }) {
  return (
    <button className="slick-next-btn" onClick={onClick} aria-label="Next">
      <i className="fa fa-chevron-right" aria-hidden="true" />
    </button>
  )
}

export default function ProductCarousel() {
  const [arrowColour, setArrowColour] = useState(products[0].colour)
  const sliderRef = useRef(null)

  const settings = {
    prevArrow: <PrevArrow colour={arrowColour} />,
    nextArrow: <NextArrow />,
    fade: true,
    beforeChange: (_cur, next) => setArrowColour(products[next].colour),
  }

  return (
    <div className="row car-holder wow fadeIn">
      {/* Left column: heading */}
      <div className="col-lg-4">
        <div className="col-sm-12 slogans">
          <h2 className="text-uppercase">
            Snacks <br className="d-none d-sm-inline" />
            that get <br className="d-none d-sm-inline" />
            you <span>buzzing !</span>
          </h2>
          <img
            src="https://www.bazana.in/assets/images/bazana-nuts-separator.jpg"
            className="separator"
            alt=""
          />
          <p>{"Let's meet your Not Fried, No Oil Snacks !"}</p>
        </div>
      </div>

      {/* Right column: slider */}
      <div className="col-lg-8">
        <style>{`
          .buck-carousel .slick-prev-btn,
          .buck-carousel .slick-next-btn {
            background: none; border: none; cursor: pointer;
            font-size: 22px; position: absolute; top: 50%;
            transform: translateY(-50%); z-index: 10;
          }
          .buck-carousel .slick-prev-btn { left: -30px; }
          .buck-carousel .slick-next-btn { right: -30px; color: inherit; }
        `}</style>

        <Slider ref={sliderRef} {...settings} className="buck-carousel" id="buck-carousel">
          {products.map((prod, i) => (
            <div key={i}>
              <div className="blue colour">
                {/* Pack image */}
                <div className="col-3 im">
                  <img src={prod.img} alt={prod.alt} id="soprod" className="product" />
                </div>

                {/* Text panel with animated gradient */}
                <div
                  className="col-9 text-holder"
                  style={{
                    background: prod.gradient,
                    backgroundSize: '300% 300%',
                    WebkitAnimation: 'AnimationName 5s ease infinite',
                    MozAnimation: 'AnimationName 5s ease infinite',
                    animation: 'AnimationName 5s ease infinite',
                  }}
                >
                  <div>
                    <h3 className="text-uppercase">{prod.h3}</h3>
                    <h2 className="text-uppercase">{prod.h2}</h2>
                    <p>{prod.p}</p>
                    <a href={prod.link} className="btn btn-light text-uppercase">Buy Now</a>
                  </div>

                  {/* Corner icons */}
                  <div className="backg">
                    <img src={prod.topLeft}     className="top-left"    alt="" />
                    <img src={prod.topRight}     className="top-right"   alt="" />
                    <img src={prod.bottomRight}  className="bottom-right" alt="" />
                    <img src={prod.bottomLeft}   className="bottom-left" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <span className="seal" />
    </div>
  )
}