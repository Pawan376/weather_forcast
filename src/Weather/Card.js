import React from 'react';
import "tachyons";
const Card = ({time,temp_c,temp_f,humidity,icon,text,locationCity,locationRegion}) => {
    return(
        <article className="mw5 center bg-lightest-blue br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
                <img src={icon} alt='weatherImg' className="br-100 h3 w3 dib" title="WeatherImage"/>
                <hr className="mw3 bb bw1 b--black-10"/>
                <div className="temperature"><span>{temp_c}&deg; c</span></div>  
                <div className="temperature"><span>{temp_f}&deg; f</span></div>  
                <div className="weatherCondition">{text}</div>
            </div>
            <div className="place">{locationCity}, {locationRegion}</div>
            <div className="f5">{time}</div>
        </article>
    );
}
export default Card;