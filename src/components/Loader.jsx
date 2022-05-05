import loaderImg from './../assets/loader.gif'
import style from './loader.module.css'

const Loader = props =>{
    return(
        <>
            <div className={style.loader}>
                <div>Loading...</div>
                <img src={loaderImg} />
            </div>
        </>
    )
}

export default Loader;