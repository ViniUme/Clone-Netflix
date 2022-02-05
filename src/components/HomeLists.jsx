/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import './styles/HomeLists.css';

export default (props) => {

    const ArrowLeft = () => {
        console.log('aaaaa');
    }

    return(
        <>
        <div className="HomeLists--list_name">{props.list_name}</div>
        <section className="HomeLists--list">

            <div className="arrow-left" onClick={ArrowLeft()} >
                <NavigateBeforeIcon/>
            </div>

            <section className="HomeLists--list-banners">
                {props.info.results && props.info.results.map((item , key) => {
                    return <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" />
                })}
            </section>

        </section>
        </>
    );
}