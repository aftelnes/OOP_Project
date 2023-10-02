import classes from './header_style/header.module.css'
import LogoImage from './images/logo_image';
import MyButton from '../buttons/MyButton';
import { useState } from 'react';
import MyModal from '../modal/MyModal';

const Header = function() {

    const [modal, setModal] = useState(true);

    return(
        <header className={classes.headerMain}>
                <div className={classes.headerImageLogo}><LogoImage></LogoImage></div>
                <div className={classes.headerSiteName}><h1>Наш сайт</h1></div>
                <div className={classes.headerAboutUsBtn} onClick={() => setModal(true)}><MyButton>О нас</MyButton></div>
                <MyModal visible={modal} setVisible={setModal}>
                    <p><h2 style={{textAlign: 'center', padding: 20}}>Приветствую тебя пользователь!</h2></p>
                    <b/>
                    <p>Это некоммерчексий проект созданный командой разработчиков из КубГу</p>
                </MyModal>
        </header>
    )
};

export default Header;