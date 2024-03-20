import './Footer.css'

function Footer() {
    return (
      <footer>
        <div className="logo">
          <h1>LOGO</h1>
          <h3>Follow Us</h3>
          <div className="social_media">
            <a href="/" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/" target="_blank">
            <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="countries">
          <h2>Countries</h2>
          <p>India</p>
          <p>Australia</p>
          <p>U.K.</p>
          <p>France</p>
          <p>Italy</p>
          <p>Spain</p>
        </div>
        <div className="about">
          <h2>About Us</h2>
          <p>Our Team</p>
          <p>Gallery</p>
          <p>Blogs</p>
          <p>Word With US</p>
        </div>
        <div className="contact">
          <h2>Contact Us</h2>
          <p>++00 000-000-0000</p>
          <p>abcd.1234@gmail.com</p>
          <p>Mumbai, 400076, India</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  