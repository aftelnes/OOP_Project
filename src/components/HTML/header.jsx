import classes from './header_style/header.module.css'
import LogoImage from './images/logo_image';

const Header = function() {
    return(
        <header className={classes.headerMain}>
                <div className={classes.headerImageLogo}><LogoImage></LogoImage></div>
                <div className={classes.headerSiteName}><h1>Наш сайт</h1></div>
        </header>
    )
};

export default Header;