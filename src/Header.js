import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
    return (
        <>
            <div className="main-nav">
                <div className="container">
                    <div className="nav-bar row justify-content-center">
                        <div className="main-menu col-4 d-lg-flex justify-content-around align-items-center d-none d-lg-block">
                            <li><a href="#"><i class="bi bi-search"></i></a></li>
                            <li><a href="#">home</a></li>
                            <li><a href="#">menu</a></li>
                            <li><a href="#">blog</a></li>
                        </div>
                        <div className="logo col-4 d-flex justify-content-center align-items-center">
                            <img src={require('./image/logo.jpg')} alt="" />
                        </div>
                        <div className="main-menu col-4 d-lg-flex justify-content-between align-items-center d-none d-lg-block">
                            <li><a href="#">products</a></li>
                            <li><a href="#">contact us</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#"><i class="bi bi-person"></i></a></li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;