export default function AboutUs() {
    return (
        <div>
            <style jsx>
                {`
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                /* style for flipping card starts here */
                
                .flipping-cards{
                    margin-top: -3rem;
                    padding: 2rem 0;
                    font-family: cursive;
                }
                
                .flipping-card-wrapper{
                    padding: 2rem;
                    margin: 2rem;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    align-content: center;
                }
                
                .flipping-card-item-wrapper{
                    perspective: 150rem;
                    position: relative;
                    width:   340px;
                    height:  450px;
                    margin: 1rem;
                }
                
                .flipping-card-item-side{
                    position: absolute;
                    top: 0;
                    left: 0;
                    backface-visibility: hidden;
                    margin:  1.5rem;
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-color: #ffffff;
                    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.18);
                    transition: all 1s;
                }
                
                
                .flipping-card-item-side-back{
                    color: #000;
                    transform: rotateY(180deg);
                }
                
                
                .flipping-card-item-wrapper:hover .flipping-card-item-side-front{
                    transform: rotateY(-180deg);
                }
                
                .flipping-card-item-wrapper:hover .flipping-card-item-side-back{
                    transform: rotateY(0);
                }
                
                .flipping-card-item-img{
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-blend-mode: color;
                }
                
                .flipping-card-back-wrapper{
                    font-weight: 200;
                    position: relative;
                    top: 25%;
                    left: 0;
                    margin: 2rem;
                    text-align: center;
                }
                
                `}</style>
            <div>
                <br />
                <p className="text-2xl" style={{ textAlign: 'center', fontFamily: 'cursive' }}>Who We Are:-</p>

                <p className="text-2xl" style={{ textAlign: 'center', fontFamily: 'cursive', display: 'inline', marginLeft: '400px', float: 'left' }}>
                    Team Three Musketeers -
                </p>
                <p className="text-2xl" style={{ textAlign: 'center', fontFamily: 'cursive', display: 'inline', margin: '0', float: 'left', color: "red" }}>Ready to learn new things everyday</p>
            </div >
            <br></br>
            <br></br>
            <section className="flipping-cards">
                <div className="flipping-card-wrapper">
                    <div className="flipping-card-item-wrapper">
                        <div className="flipping-card-item-side flipping-card-item-side-front">
                            <img src="s.png" alt="" className="flipping-card-item-img" />
                        </div>
                        <div className="flipping-card-item-side flipping-card-item-side-back">
                            <div className="flipping-card-back-wrapper">
                                <p>Hello There I am Seturaj Matroja👋🏼. Student at Dharmsinh Desai University</p>
                                Connect with me at:
                                <br></br>
                                <br></br>
                                <a href="" target={"_blank"}>
                                    <img src="linkedin-original.svg" style={{ width: '40px', height: 'auto', float: 'left', marginRight: '25px', marginLeft: '50px' }}></img>
                                </a>
                                <a href="" style={{ float: 'left', marginRight: '25px' }} target={"_blank"}>
                                    <img src="github.svg" style={{ width: '40px', height: 'auto' }}></img>
                                </a>
                                <a href="" style={{}} target={"_blank"}>
                                    <img src="instagram.png" style={{ width: '40px', height: 'auto' }}></img>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flipping-card-item-wrapper">
                        <div className="flipping-card-item-side flipping-card-item-side-front">
                            <img src="jaynish.png" alt="" className="flipping-card-item-img" />
                        </div>
                        <div className="flipping-card-item-side flipping-card-item-side-back">
                            <div className="flipping-card-back-wrapper">
                                <p>Hello There I am Jaynish Mandalia👋🏼. Student At Dharmsinh Desai University</p>
                                Connect with me at:
                                <br></br>
                                <br></br>
                                <a href="https://www.linkedin.com/in/jaynish-mandalia-8169381bb/" target={"_blank"}>
                                    <img src="linkedin-original.svg" style={{ width: '40px', height: 'auto', float: 'left', marginRight: '25px', marginLeft: '50px' }}></img>
                                </a>
                                <a href="https://github.com/JaynishMandalia" target={"_blank"} style={{ float: 'left', marginRight: '25px' }} >
                                    <img src="github.svg" style={{ width: '40px', height: 'auto' }}></img>
                                </a>
                                <a href="https://mail.google.com" target={"_blank"} >
                                    <img src="instagram.png" style={{ width: '40px', height: 'auto' }}></img>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flipping-card-item-wrapper">
                        <div className="flipping-card-item-side flipping-card-item-side-front">
                            <img src="yash1.jpg" alt="" className="flipping-card-item-img" />
                        </div>
                        <div className="flipping-card-item-side flipping-card-item-side-back">
                            <div className="flipping-card-back-wrapper">
                                <p>Hello There I am Yash Miyatra👋🏼. Student at Dharmsinh Desai University</p>
                                Connect with me at:
                                <br></br>
                                <br></br>
                                <a href="">
                                    <img src="linkedin-original.svg" target={"_blank"} style={{ width: '40px', height: 'auto', float: 'left', marginRight: '25px', marginLeft: '50px' }}></img>
                                </a>
                                <a href="" target={"_blank"} style={{ float: 'left', marginRight: '25px' }} >
                                    <img src="github.svg" style={{ width: '40px', height: 'auto' }}></img>
                                </a>
                                <a href="" target={"_blank"} style={{}} >
                                    <img src="instagram.png" style={{ width: '40px', height: 'auto' }}></img>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}