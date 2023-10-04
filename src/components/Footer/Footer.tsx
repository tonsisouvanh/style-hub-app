import Logo from "../Logo/Logo";
import SocialMediaLinks from "../SocialMediaLink/SocialMediaLinks";
const Footer = () => {
  return (
    <footer id="footer" className="footer bg-base-300 text-base-content">
      <div className="rounded-div flex items-center justify-between px-4 py-10 text-base-content sm:px-6 lg:px-16 lg:py-20">
        <aside>
          <Logo />
          <p>
            &copy; {new Date().getFullYear()} Developed by DevTons. All rights
            reserved.
          </p>
          <br />
          <p>
            <span className="font-bold">Email: </span>
            tonsisouvanh7@gmail.com
          </p>
          <div>
            <span className="font-bold">Website: </span>
            <a
              className="hover:text-secondary"
              target="_blank"
              href="https://devtons-120196.web.app/"
            >
              https://devtons-120196.web.app
            </a>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Social</header>
          <div className="">
            <SocialMediaLinks />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
