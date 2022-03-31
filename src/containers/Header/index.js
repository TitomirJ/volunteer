import React from 'react';
import HeaderBg from '../../assests/images/HeaderBg.png';
import { useStyles } from './styles';
import Button from '../../components/Button';

const Header = () => {
    const classes = useStyles();

    return (
        <div id="header" className={classes.header} style={{backgroundImage: `url(${HeaderBg})`}}>
            <h1 className={classes.title}>каждый день <br/> <span>мы помогаем</span></h1>
            <div className={classes.blocksWrapper}>
                <div className={classes.block}>
                    <h2>киев</h2>
                    <ul>
                        <li>тероборона</li>
                        <li>эвакуация</li>
                        <li>пенсионеры</li>
                    </ul>
                    <div className={classes.blockButton}>
                        <Button variant="yellowPrimary">ПОМОЧЬ</Button>
                    </div>
                </div>
                <div className={classes.block}>
                    <h2>запорожье</h2>
                    <ul>
                        <li>тероборона</li>
                        <li>эвакуация</li>
                        <li>раненые</li>
                    </ul>
                    <div className={classes.blockButton}>
                        <Button variant="primary">ПОМОЧЬ</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;