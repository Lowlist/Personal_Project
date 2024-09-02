import style from './style/Header.module.css'

function Header(){
    return(
        <div className={style.header}>
            <div className={style.icon}>JO YOUNG MIN</div>
            <div className={style.mainMenu}>
                <div className={style.profile}>PROFILE</div>
                <div className={style.portFolio}>PORTFOLIO</div>
                <div className={style.github} onClick={()=>{}}>GITHUB</div>
                <div className={style.moreBtn} onClick={()=>{}}>---</div>
            </div>
        </div>
    )
}

export default Header;