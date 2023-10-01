import classes from './header_style/header.module.css'

const Header = function() {
    return(
        <header className={classes.headerMain}>
            <h2>Вот тут логотип, а дальше кнопочки</h2>
        </header>
    )
};

export default Header;