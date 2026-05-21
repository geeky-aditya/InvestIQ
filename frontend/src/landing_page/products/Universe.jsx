function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The InvestIQ Universe</h1>
        <p className="mt-3">
          Extent your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p=3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-muted text-small mt-3">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "30%" }} />
          <p className="text-muted text-small"> &nbsp; &nbsp; &nbsp; Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-muted text-small">Options trading platform</p>
        </div>
        <div className="col-4 p=3 mt-5">
          <img src="media/images/InvestIQ.png" style={{ width: "30%" }} />
          <p className="text-muted text-small">
            {" "}
            &nbsp; &nbsp;Asset management
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-muted text-small text-center"> &nbsp; &nbsp; &nbsp; Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo (1).png" style={{ width: "30%" }} />
          <p className="text-muted text-small">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
