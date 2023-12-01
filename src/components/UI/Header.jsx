import classes from './Header_style/Header.module.css'
import LogoImage from './Logo_image'
import MyButton from '../buttons/MyButton';
import { useState } from 'react';
import MyModal from '../UI/Modal/MyModal';
import { Button } from "@mantine/core";

const Header = function() {

    const [modal, setModal] = useState(false);

    return(
        <header className={classes.headerMain}>
                <div className={classes.headerImageLogo}><LogoImage></LogoImage></div>
                <div className={classes.headerSiteName}><h1>Urban Forecast</h1></div>
                <div className={classes.headerAboutUsBtn} onClick={() => setModal(true)}><Button gradient={{ from: 'rgb(0, 33, 45)', to: 'rgb(52, 118, 189)', deg: 310 }}
                variant="gradient" size='lg' radius='md'>О нас</Button></div>
                <MyModal visible={modal} setVisible={setModal}>
                    <p><h2 style={{textAlign: 'center', padding: 20}}>Приветствую тебя пользователь!</h2></p>
                    <b/>
                    <p>Это некоммерчексий проект созданный командой разработчиков из КубГу</p>
                </MyModal>
        </header>
    )
};

export default Header;