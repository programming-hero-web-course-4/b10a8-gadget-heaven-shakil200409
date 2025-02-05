import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="mx-20">
      <div className="py-10 border-b border-gray-300">
        <Heading
          title={"Gadget Heaven"}
          subTitle={
            "Leading the way in cutting-edge technology and innovation."
          }
        />
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
  );
};

export default Footer;
