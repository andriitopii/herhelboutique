const  HeadTitle = ({titleSection}) => {
    return ( 
        <div className="head-section">
            <h1 className="head-title">{titleSection}</h1>
            <a className="primary-btn" type="button">Перейти в каталог</a>
        </div>
     );
}
 
export default HeadTitle;