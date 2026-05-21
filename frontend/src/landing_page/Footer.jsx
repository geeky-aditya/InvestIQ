import "./Footer.css";
function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(250,250,250)",borderTop:"1px solid #dee2e6"}}>
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/media/images/trade.png"
              className="logo"
              style={{ width: "45px" }}
            />
            <span className="brand-text-footer">INVESTIQ</span>
          </a>
          <p className="mb-4">
            &copy;2010-2027, Not InvestIQ Broking Ltd. <br/>All rights reserved.
          </p>
          <div className="d-flex gap-3 social-icons">
            <i class="fa-brands fa-twitter "></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col footer">
          <p className="fw-bold">Company</p>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Pricing</a>
          <a href="#">Referral programme</a>
          <a href="#">Careers</a>
          <a href="#">InvestIQ,tech</a>
          <a href="#">Press & media</a>
          <a href="#">InvestIQ cares (CSR)</a>
        </div>
        <div className="col footer">
          <p className="fw-bold">Support</p>
          <a href="#">Contact</a>
          <a href="#">Support portal</a>
          <a href="#">I-connect blog</a>
          <a href="#">List of charges</a>
          <a href="#">Downloads & Resources</a>
        </div>
        <div className="col footer">
          <p className="fw-bold">Account</p>
          <a href="#">Open an account</a>
          <a href="#">Fund transfer</a>
          <a href="#">60 day challenge</a>
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize:"15px",lineHeight:"1.8"}}>
      <p>
        InvestIQ Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
        INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
        Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
        InvestIQ Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
        INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
        Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
        Bengaluru - 560078, Karnataka, India. For any complaints pertaining to
        securities broking please write to complaints@zerodha.com, for DP
        related to dp@investIQ.com. Please ensure you carefully read the Risk
        Disclosure Document as prescribed by SEBI | ICF
      </p>
      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>
      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of InvestIQ and offering such services, please create a ticket here.
      </p>
      </div>
    </div>
    <hr className="mt-4"/>
    <div className="d-flex gap-3 links  justify-content-center">
        <a href="#">NSE</a>
        <a href="#">BSE</a>
        <a href="#">MCX</a>
        <a href="#">Terms & conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">Disclosure</a>
    </div>
    </footer>
  );
}

export default Footer;
