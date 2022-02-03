/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './styles/MainSerie.css';

export default ({info}) => {

    let airDate = new Date(info.first_air_date);

    const Season = (number) => {
        
        if(number > 1){
            return `${number} Seasons`;
        }
        else{
            return `${number} Season`;
        }
    }

    console.log(info);
    return(
        <section className="MainSerie--section-root" style={{
            background: `linear-gradient(0deg, #050505 10%, transparent 90%),
            linear-gradient(90deg, #050505 30%, transparent 70%),
            url(https://image.tmdb.org/t/p/original${info.backdrop_path})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="MainSerie--info-container">

                <div className="MainSerie--title">
                    {info.name}
                </div>
                <div className="MainSerie--infos">

                    <div className="MainSerie--score">{info.vote_average}</div>
                    <div className="MainSerie--date">{airDate.getFullYear()}</div>
                    <div className="MainSerie--temp">{Season(info.number_of_seasons)}</div>

                </div>

                <div className="MainSerie--buttons">

                </div>

            </div>
        </section>
    );
}