import { useState, useEffect } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoSrc, setLogoSrc] = useState('https://www.bazana.in/assets/images/Bazana-Logo.png')

  // Close menu on scroll (mirrors original behaviour)
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuOpen])

  const menuBtnSrc = menuOpen
    ? 'https://www.bazana.in/assets/images/Bazana-Exit.png'
    : 'https://www.bazana.in/assets/images/Bazana-Menu.png'

  return (
    <header>
      {/* Logo */}
      <div className="bazana-logo wow fadeIn">
        <a href="https://www.bazana.in/">
          <img
            src={logoSrc}
            id="bazana-logo"
            alt="Bazana Logo"
            onMouseEnter={() =>
              setLogoSrc('/slides/img3.jpg')
            }
            onMouseLeave={() =>
              setLogoSrc('/slides/img3.jpg')
            }
          />
        </a>
      </div>

      {/* Hamburger / close button */}
      <div className="menu-button wow fadeIn">
        <img
          src={menuBtnSrc}
          id="menu-button"
          alt="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Slide-in menu */}
      <div
        id="menu"
        className={`menu fade ${menuOpen ? 'animated fadeInRight' : 'animated fadeOutRight'}`}
        style={{ visibility: menuOpen ? 'visible' : 'hidden', zIndex: 999 }}
      >
        <div className="menu-top">
          <ul className="text-uppercase list-unstyled">
            <li><a href="">Intro</a></li>
            <li><a href="">Your Snacks</a></li>
            <li><a href="" target="_blank" rel="noreferrer">Buy Now</a></li>
            <li><a href="">Our Story</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>

        <div className="menu-bot">
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
          <p>&copy; 2026. Bazana Foods Pvt. Ltd.</p>
        </div>
      </div>
    </header>
  )
}
