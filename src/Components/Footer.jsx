import Heading from "./Heading";

const Footer = () => {
  return (
    <section className="">
      <div className="max-w p-20">
        <div className="py-10 border-b border-gray-300">
          <div className="text-center">
            <h3 className={`text-3xl font-bold my-4`}>Gadget Heaven</h3>
            <p className="text-gray-500">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
        </div>
        <footer className="footer sm:footer-horizontal place-items-center p-10 text-center">
          <nav className="text-center">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
