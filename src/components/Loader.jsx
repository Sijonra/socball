import loaderImg from './../assets/loader.gif'
import style from './loader.module.css'

const Loader = props =>{
    return(
        <>
            <div className={style.loader}>
                <img src={loaderImg} alt=""/>
            </div>
        </>
    )
}

export default Loader;