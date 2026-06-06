export default function Footer() {
  return (
    <footer className="wow fadeIn">
      <div className="nut-holder d-none">
        <img src="https://www.bazana.in/assets/images/footer-cashew.png" alt="" />
      </div>

      <div className="footer-in">
        <div className="row">
          {/* Logo */}
          <div className="col-lg-5">
            <img
              src="/slides/img3.jpg"
              className="logo"
              alt="Bazana Logo"
            />
          </div>

          {/* Nav links */}
          <div className="col-lg-4">
            <ul className="text-uppercase list-unstyled">
              <li><a href="">Intro</a></li>
              <li><a href="">Your Snacks</a></li>
              <li><a href="" target="_blank" rel="noreferrer">Buy Now</a></li>
              <li><a href="">Our Story</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-lg-3">
            <h4 className="text-uppercase">Follow the Buzz on</h4>
            <ul className="list-inline flexer-social">
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.instagram.com/bazana.in">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/Bazana-382407239198344/">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC3FRlcL7OGDnfq0IJMDNLmg">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/bazanafoods">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a className="social-icon" target="_blank" rel="noreferrer" href="mailto:feedback@bazana.in">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copyright">
          <div className="col-md-12">
            &copy; 2026. Temp Foods Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
