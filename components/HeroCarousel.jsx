import { useEffect, useRef } from 'react'

/* -------------------------------------------------------
   Slide data — Unsplash dry fruits / nuts images
   (same captions & buttons as original, new images)
   ------------------------------------------------------ */

// 10 dry-fruits images — served locally from public/slides/
// Run `node download-slides.js` once to download them from Unsplash.
const dryFruitImages = [
  { url: '/slides/slide-01.jpg', alt: 'mixed dry fruits' },
  { url: '/slides/slide-02.jpg', alt: 'healthy crunchy snacks' },
  { url: '/slides/slide-03.jpg', alt: 'healthy dry snacks trail mix' },
  { url: '/slides/slide-04.jpg', alt: 'dry roasted snacks almonds' },
  { url: '/slides/slide-05.jpg', alt: 'assorted nuts' },
  { url: '/slides/slide-06.jpg', alt: 'cashews and pistachios' },
  { url: '/slides/slide-07.jpg', alt: 'roasted almonds' },
  { url: '/slides/slide-08.jpg', alt: 'sunflower and pumpkin seeds' },
  { url: '/slides/slide-09.jpg', alt: 'cranberry and nut mix' },
  { url: '/slides/slide-10.jpg', alt: 'gluten-free nut snack' },
]

const mobileSlides = [
  {
    img: dryFruitImages[0].url, alt: dryFruitImages[0].alt,
    h2: '', h1: '', p: '', btn: false,
  },
  {
    img: dryFruitImages[1].url, alt: dryFruitImages[1].alt,
    h2: 'Power in', h1: 'Small Packs !',
    p: "We're hanging at your local Kirana.",
    btn: true,
  },
  {
    img: dryFruitImages[2].url, alt: dryFruitImages[2].alt,
    h2: 'Crunchy ! Salty ! Sweet ! TRAIL MIX !', h1: 'CRANBERRY FUSION!',
    p: 'Mix it up! Change your snack, Change your life!',
    btn: true,
  },
  {
    img: dryFruitImages[3].url, alt: dryFruitImages[3].alt,
    h2: 'The Power of', h1: 'Roasted Snacks !',
    p: 'Not Fried ! No Oil !',
    btn: true,
  },
  { img: dryFruitImages[4].url, alt: dryFruitImages[4].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[5].url, alt: dryFruitImages[5].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[6].url, alt: dryFruitImages[6].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[7].url, alt: dryFruitImages[7].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[8].url, alt: dryFruitImages[8].alt, h2: '', h1: '', p: '', btn: false },
  {
    img: dryFruitImages[9].url, alt: dryFruitImages[9].alt,
    h2: 'A Gluten-Free Snack', h1: 'With Zesty Flavors',
    p: '', btn: true,
  },
]

const desktopSlides = [
  {
    img: dryFruitImages[0].url, alt: dryFruitImages[0].alt,
    h2: '', h1: '', p: '', btn: false,
  },
  {
    img: dryFruitImages[1].url, alt: dryFruitImages[1].alt,
    h2: 'Power in', h1: 'Small Packs !',
    p: "We're hanging at your local Kirana.",
    btn: true,
  },
  {
    img: dryFruitImages[2].url, alt: dryFruitImages[2].alt,
    h2: 'Crunchy ! Salty ! Sweet ! TRAIL MIX !', h1: 'CRANBERRY FUSION!',
    p: 'Mix it up! Change your snack, Change your life!',
    btn: true,
  },
  {
    img: dryFruitImages[3].url, alt: dryFruitImages[3].alt,
    h2: 'The Power of', h1: 'Roasted Snacks !',
    p: 'Not Fried ! No Oil !',
    btn: true,
  },
  { img: dryFruitImages[4].url, alt: dryFruitImages[4].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[5].url, alt: dryFruitImages[5].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[6].url, alt: dryFruitImages[6].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[7].url, alt: dryFruitImages[7].alt, h2: '', h1: '', p: '', btn: false },
  { img: dryFruitImages[8].url, alt: dryFruitImages[8].alt, h2: '', h1: '', p: '', btn: false },
  {
    img: dryFruitImages[9].url, alt: dryFruitImages[9].alt,
    h2: 'A Gluten-Free Snack', h1: 'With Zesty Flavors',
    p: '', btn: true,
  },
]

/* -------------------------------------------------------
   Single carousel renderer
   ------------------------------------------------------ */
function CarouselTrack({ slides, id }) {
  const trackRef = useRef(null)
  const currentRef = useRef(0)
  const intervalRef = useRef(null)
  const dotsContainerRef = useRef(null)

  const goTo = (idx) => {
    const items = trackRef.current?.querySelectorAll('.carousel-item-inner')
    if (!items) return
    items[currentRef.current]?.classList.remove('active')
    const dots = dotsContainerRef.current?.querySelectorAll('.c-dot')
    if (dots) {
      dots[currentRef.current]?.classList.remove('active')
      dots[idx]?.classList.add('active')
    }
    currentRef.current = idx
    items[idx]?.classList.add('active')
  }

  const next = () => goTo((currentRef.current + 1) % slides.length)

  useEffect(() => {
    goTo(0)
    intervalRef.current = setInterval(next, 4000)
    return () => clearInterval(intervalRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="carousel-root" id={id}>
      <style>{`
        .carousel-root { position: relative; overflow: hidden; }
        .carousel-item-inner { display: none; position: relative; }
        .carousel-item-inner.active { display: block; animation: fadeIn .5s ease-in-out; }
        .c-dots { position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%); display:flex; gap:6px; z-index:5; }
        .c-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,.5); cursor: pointer; transition: background .3s; }
        .c-dot.active { background: #fff; }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
      `}</style>

      <div ref={trackRef}>
        {slides.map((s, i) => (
          <div key={i} className="carousel-item-inner">
            <img src={s.img} alt={s.alt} className="slider-img" style={{ width: '100%', display: 'block' }} />
            {(s.h1 || s.h2 || s.p || s.btn) && (
              <div className="the-cap">
                {s.h2 && <h2>{s.h2}</h2>}
                {s.h1 && <h1>{s.h1}</h1>}
                {s.p  && <p>{s.p}</p>}
                {s.btn && (
                  <a href="" target="_blank" rel="noreferrer" className="btn btn-light btn-sm">
                    Buy Now
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots — display only, no click interaction */}
      <div className="c-dots" ref={dotsContainerRef}>
        {slides.map((_, i) => (
          <span key={i} className="c-dot" style={{ cursor: 'default' }} />
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------
   Exported component
   ------------------------------------------------------ */
export default function HeroCarousel() {
  return (
    <div className="carousels wow fadeIn">
      {/* Mobile */}
      <div className="d-block d-lg-none">
        <CarouselTrack slides={mobileSlides} id="carousel-mobile" />
      </div>
      {/* Desktop */}
      <div className="d-none d-lg-block">
        <CarouselTrack slides={desktopSlides} id="carousel-desktop" />
      </div>
    </div>
  )
}