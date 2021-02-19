import React from 'react';
import "./SearchPage.css";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";



function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow
            image="https://www.emu.edu.tr/media/assets/images/programs/electrical-electronic-engineering-elektrik-elektronik-muhendisligi-03.jpg"
            channel="JORDAN"
            verified
            subs="452K"
            noOfVideos={434}
            description="You can learn a lot here bro"
            />
            <hr/>
            <VideoRow 
             views="1.4M"
             subs="788K"
             description="Let's learn some Python programming"
             timestamp="59 minutes ago"
             channel="Jam the python guru"
             title="Python tutorial"
             image="https://www.logolynx.com/images/logolynx/3c/3cb425a03c3c7c61e18fdbe4beba1737.jpeg"
             />
             <VideoRow
             views="2M"
             subs="834K"
             description="I'm a javascript master and I teach JS"
             timestamp="3 seconds ago"
             channel="JAM teaches coding"
             title="Master Javascript language in a day"
             image="https://cdn-media-1.freecodecamp.org/images/1*bcZz-qb_DNpvrNNwQBhQmQ.jpeg"
             
             />
              <VideoRow
             views="2M"
             subs="834K"
             description="The Tesla Model"
             timestamp="3 seconds ago"
             channel="ELECTRIC VEHICLES"
             title="Why the Tesla Model S is the best car"
             image="https://cdn.motor1.com/images/mgl/gpb2N/s1/next-gen-tesla-model-s.jpg"
             
             />
             
        </div>
    )
}

export default SearchPage
