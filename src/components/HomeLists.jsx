/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './styles/HomeLists.css'

export default (props) => {

    return(
        <section className="HomeLists--list">
            <div className="HomeLists--list_name">{props.list_name}</div>

            <section className="HomeLists--list-banners">
                {props.info.results && props.info.results.map((item , key) => {
                    return <img key={key} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt="" />
                })}
            </section>

        </section>
    );
}