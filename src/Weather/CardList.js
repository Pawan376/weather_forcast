import React from 'react';
import Card from './Card';
import 'tachyons';

const CardList = ({weather,location}) => {
    return(
        <div>
            <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3">WEATHER FORCAST</h1>
                <div className="pa3 bt">
                    <div className="f3">Location :{location.name}</div>
                    <div className="f3">Region :{location.region}</div>
                    <div className="f3">tz_id :{location.tz_id}</div>
                    <div className="f3">Country :{location.country}</div>
                    <div>Date & Time :{location.localtime}</div>
                </div>
            </article>
            <div className='flex flex-wrap items-start'>
               {
                    weather.map((user, i) => {
                    return (
                        <Card
                        key={i}
                        time={user.time}
                        temp_c={user.temp_c}
                        temp_f={user.temp_f}
                        humidity={user.humidity}
                        icon={user.condition.icon}
                        text={user.condition.text}
                        locationCity={location.name}
                        locationRegion={location.region}
                        />
                    );
                    })
                }
            </div>
        </div>
    );
}
export default CardList;