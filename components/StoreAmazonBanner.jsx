export default function StoreAmazonBanner() {
  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const target = document.getElementById('map')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="row wow fadeIn amazon">
      {/* Kirana / Next-Door panel */}
      <div className="col-md-6 the-orange">
        <div className="row">
          {/* Mobile image */}
          <div className="col-sm-5 d-sm-none">
            <img
              src="/slides/img2.jpg"
              alt="Bazana Kirana Store Packs"
            />
          </div>

          <div className="col-sm-7 alltext">
            <h5 className="text-uppercase">We are hanging</h5>
            <h4 className="text-uppercase">Next Door!</h4>
            <p>
              at your favorite neighborhood Kirana Stores across Mumbai, Bangalore and Pune!
            </p>
            <div className="btn-distances">
              <a
                className="btn btn-danger btn-lg text-uppercase sliding-link"
                href="#map"
                onClick={handleSmoothScroll}
              >
                Find Your Store!
              </a>
            </div>
          </div>

          {/* Desktop image */}
          <div className="col-sm-5 d-none d-sm-block">
            <img
              src="/slides/img.jpg"
              alt="Bazana Kirana Store Packs"
            />
          </div>
        </div>
      </div>

      {/* Amazon panel */}
      <div className="col-md-6 the-white">
        <div className="row relative">
          {/* Mobile image */}
          <div className="col-sm-5 d-sm-none">
            <img
              src="https://www.bazana.in/assets/images/Bazana-Amazon-Mobile-Packs.png"
              alt="Bazana Amazon Packs"
            />
          </div>

          <div className="col-sm-7 alltext">
            <h5 className="text-uppercase">We are online on</h5>
            <h4 className="text-uppercase">Amazon.in!</h4>
            <p>
              Yup! You can buy your favorite Bazana! snacks from the comfort of your digital device!
            </p>
            <div className="btn-distances">
              <a
                className="btn btn-danger btn-lg text-uppercase"
                href="https://www.amazon.in/stores/Bazana/page/2CD769DB-478F-439E-A28E-61EBE071C186?ref_=ast_bln"
                target="_blank"
                rel="noreferrer"
              >
                Buy on Amazon.in!
              </a>
            </div>
          </div>

          {/* Desktop image */}
          <div className="col-sm-5 d-none d-sm-block">
            <div className="abs">
              <img
                src="https://www.bazana.in/assets/images/Bazana-Amazon-Packs.png"
                alt="Bazana Amazon Packs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
