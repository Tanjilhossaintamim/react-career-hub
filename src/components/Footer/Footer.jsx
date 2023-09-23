function Footer() {
  return (
    <section className="bg-[#1A1919]  py-5">
      <div className="container">
        <footer className="footer p-10 bg-[#1A1919] text-[#FFFFFFB2]">
          <aside>
            <span className="footer-title text-xl">Career Hub</span>
            <p>
              There are many variations of passages of Lorem Ipsum
              <br /> but the majority have <br />
              suffered alteration in some form.
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
