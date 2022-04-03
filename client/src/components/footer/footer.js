import React from 'react'
function footer() {
        return(
            <footer>
                <div className="container">

                    <div className="noi-dung about">
                        <h2>About Me</h2>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium dolores alias ipsa vel hic
                            tempore exercitationem ipsam explicabo repudiandae ut consectetur qui, earum at nostrum perspiciatis
                            asperiores necessitatibus facilis esse.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia id possimus quibusdam nihil earum in
                            provident enim animi commodi quisquam! Molestiae cupiditate mollitia pariatur error ea, debitis
                            eaque quo dolorum.</p>
                        <ul className="social-icon">
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-instagram"></i></a></li>
                            <li><a href=""><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                
                    <div className="noi-dung links">
                        <h2>Path</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">Contact Information</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Policy Conditions</a></li>
                        </ul>
                    </div>
                    
                    <div className="noi-dung contact">
                        <h2>Contact Information</h2>
                        <ul className="info">
                            <li>
                                <span><i className="fa fa-map-marker"></i></span>
                                <span>Address: 1st Street, Thu Duc City,<br />
                                     Ho Chi Minh City<br />
                                    Việt Nam</span>
                            </li>
                            <li>
                                <span><i className="fa fa-phone"></i></span>
                                <p><a href="#">Phone: +84 123 456 789</a>
                                    <br />
                                    </p>
                            </li>
                            <li>
                                <span><i className="fa fa-envelope"></i></span>
                                <p><a href="#">Email: provip_beemo@gmail.com</a></p>
                            </li>
                            <li>
                                <form className="form">
                                    <input type="email" className="form__field" placeholder="Subscribe Email" />
                                    <button type="button" className="btn btn--primary  uppercase">SEND</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    
                </div>
         </footer>
        )
}
export default footer