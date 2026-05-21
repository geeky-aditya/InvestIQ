import "../Support.css"
function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            <div className="p-5 d-flex justfiy-content-between" id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="#" style={{color:"white",textDecoration:'none'}}>Track Tickets</a>
            </div>
            <div className="row px-5 ">
            <div className="col-6 p-4">
                <h1 className="fs-3">Search for an answer or browse help to create a ticket.</h1>
                <input placeholder="Eg: how do i activate F&O, why my order is getting rejected."/>
                <br/>
                <a href="#">Track account opening</a>
                <a href="#">Track segemnt activation</a>
                <a href="#">Intraday margins</a>
                <a href="#">Kite user manual</a>
            </div>
            <div className="col-6 px-5 gx-5">
                <h1>Featured</h1>
                <ol>
                    <li><a href="#">Current Takeovers and Delisting-January 2024</a></li>
                    <li><a href="#">Latest Intraday leverages-MIS & CO</a></li>
                </ol>
            </div>
            </div>
        </section>
     );
}

export default Hero;