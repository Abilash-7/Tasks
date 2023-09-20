import home from './img/home.jpeg'
import lion from './img/lion.png'
import top from './img/top.png'
import bottom from './img/bottom.png'

function Home() {
    
    return(
        <main>
            <header>
            <div className="container-fluid mt-5">
            <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <h1 className="navbar-text text-white ms-5">SIGMEN</h1>
                <ul className="nav flex-row me-5">
                        <li className="nav-item me-3"><a className="nav-link text-white" href="#home">HOME</a></li>
                        <li className="nav-item me-3"><a className="nav-link text-white" href="#shop">SHOP</a></li>
                        <li className="nav-item me-3"><a className="nav-link text-white" href="#about">ABOUT</a></li>
                        <li className="nav-item me-3"><a className="nav-link text-white" href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
        </div>
        </header>
        <section>
        <div className="container-fluid mt-5 " id="home">
            <img src={home} alt="home" style={{width:'100%',marginTop:'50px',height:'700px'}}/>
        </div>

        {/* <!-- shop section --> */}

        <div className="container-fluid mt-5" id="shop">
            <h1 className="text-center mb-5">SHOP</h1>
            <div className="container d-flex justify-content-center" id="wear">
                <div className="card m-5">
                    <img src={top} className="card-img-top rounded p-2" width="200px" height="300px" alt='card-img'/>
                    <div className="card-body">
                        <h1 className="text-center">TOPS</h1>
                        <p className="text-center"></p>
                        <div className="card-footer text-center">
                            <p>click here</p>
                            <button className="btn-warning" data-bs-target="#topmodal" data-bs-toggle="modal">Collections <span class="badge bg-danger">New</span></button>
                        </div>
                    </div>
                </div>
    {/* <!-- Bottom Wear --> */}
                <div class="card m-5">
                    <img src={bottom} className="card-img-top rounded p-2" width="200px" height="300px" alt='card-img'/>
                    <div className="card-body">
                        <h1 className="text-center">BOTTOMS</h1>
                        <p className="text-center"></p>
                        <div className="card-footer text-center ">
                            <p>click here</p>
                            <button className="btn-warning" data-bs-target="#bottommodal" data-bs-toggle="modal">Collections <span class="badge bg-danger">New</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid d-flex mt-5"  id="about">
            <div className="content mt-5">
                <h1 className="text-center mt-5">ABOUT US</h1>
                <p className="text-center mt-3 p-5" />
                This is Men’s fashion store and home to the eponymous SIGMEN brand. A by-and-by curated determination of brands that are connected by a quality and craftsmanship. We pride ourselves on the learning and dimension of administration offered, particularly the network worked around the store.
                <br/>   
                <br/>                  
                SIGMEN was brought into the world through a progression of spring-up stores in 2022. We needed to offer enhanced shopping background and inventive motivation and associate with those with a similar vision. Today our objective continues as before.
                <br/><br/>
                In 2023, we opened the ways to our leader store in Tamilnade, IN. In this space, we work crosswise over various mediums, from fashion and photography to accommodation. There’s nothing we won’t do. Joint efforts are constantly invited and sustained.
            
                <p/>
            </div>
            <div className="home-image m-5">
                <img src={lion}  width="400px" height="450px" alt='logo'/>
            </div>
        </div>
        
        {/* <!-- contact form --> */}
        <div className="container-fluid justify-content-center border p-5 mt-5" id="contact">
            <form action="">
                <h1 className="text-center">Contact</h1>
                <div className="mt-3 mb-3">
                    <label className="form-label">Name : </label>
                    <input type="text" placeholder="Enter Your Name" class="form-control"/>
                </div>
                
                <div className="mt-3 mb-3">
                    <label class="form-label">Email : </label>
                    <input type="text" placeholder="Enter Your Email Address" class="form-control"/>
                </div>

                <div className="mt-3 mb-3">
                    <label>
                    <input type="checkbox"/>  Remember here
                    </label>
                </div>
                
                <div className="mt-3 mb-3">
                    <textarea placeholder="Comment" cols="6" rows="5" class="form-control"></textarea>
                </div>
                <div className="text-center">
                    <button type="button" className="btn-primary rounded">Submit</button>
                </div>   
            </form>
        </div>
        
</section>

<footer>
        <center><p style={{marginBottom:'0'}} className="bg-dark text-white p-3"><small>&copy; SIGMEN 2023</small></p></center>
</footer>
</main>
    )
}

export default Home