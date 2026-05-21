function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/about.jpg"
            style={{ width: "60%", borderRadius: "50%" }}
          />
          <h4 className="mt-4 text-dark fs-6 ">
            Empowering investors with simple ,transparent
            <br /> and technology-driven trading solutions.
          </h4>
        </div>
        <div className="col-6 p-5">
          <p>
            InvestIQ is a modern investment platform designed to make trading
            simple, transparent, and accessible for everyone. Our goal is to
            provide powerful tools that help investors analyze markets and make
            informed financial decisions.
          </p>
          <p>
            We believe technology can simplify investing. Through intuitive
            design, real-time market insights, and advanced analytics, InvestIQ
            empowers both beginners and experienced traders.
          </p>
          <p>
            Our mission is to build a platform where anyone can confidently
            participate in financial markets and grow their wealth with clarity
            and control.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
