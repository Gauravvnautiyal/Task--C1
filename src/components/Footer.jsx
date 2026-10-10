import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="insider-bar">
        <span>SIGN UP FOR OUR DAILY INSIDER</span>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <div className="footer-main">
        <div className="footer-cols">
          <div>
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="#">Questions</a>
            <a href="/#articles">Articles</a>
            <a href="/#tutorials">Tutorials</a>
          </div>
          <div>
            <h4>Support</h4>
            <a href="#">FAQs</a>
            <a href="#">Help</a>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <h4>Stay connected</h4>
            <div className="socials">
              <Facebook size={26} />
              <Twitter size={26} />
              <Instagram size={26} />
            </div>
          </div>
        </div>

        <p className="copyright">DEV@Deakin 2026</p>
        <div className="legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;