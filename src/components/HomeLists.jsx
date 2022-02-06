/* eslint-disable import/no-anonymous-default-export */
import React , {useState} from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './styles/HomeLists.css';

export default (props) => {

    let aaa = (props.info.results.length * 146 + 50) - ((window.innerWidth - 53));
    const [marginList , setMarginList] = useState(0);

    return(
        <>
        <div className="HomeLists--list_name">{props.list_name}</div>
        <section className="HomeLists--list">

            <div className="navigation-before" onClick={ () => {
                
                if( (marginList + 146) > 0 ){
                    setMarginList(0);
                }
                else{
                    let marginCount = marginList + 146;
                    setMarginList(marginCount)
                }
            }} >
                <NavigateBeforeIcon style={{ fontSize: '50' }} />
            </div>

            <div className="navigation-next" onClick={ () => {

                let marginMax = (props.info.results.length * 146 + 50) - ((window.innerWidth + 146));

                if ( (marginList + 146) < (marginMax * (-1)) ){
                    return
                }
                else{
                    let marginCount = marginList - 146;
                    setMarginList(marginCount);
                }
            }}>
                <NavigateNextIcon style={{ fontSize: '50'}} />
            </div>

            <section className="HomeLists--list-banners" style={{ marginLeft: `${marginList}px` }}>
                {props.info.results && props.info.results.map((item , key) => {
                    return <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" />
                })}
            </section>

        </section>
        </>
    );
}