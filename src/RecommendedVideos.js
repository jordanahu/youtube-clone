import React from 'react';
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import jam from "./profile.png";
import winner from "./winner.jpg";
import doctor from "./you.jpg";


function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
            <VideoCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Brain-1295128.svg/800px-Brain-1295128.svg.png"
             title="Become a Memory Expert in 10 minutes"
               views="10.5M Views"
               timestamp="2 days ago"
               channel="JAM'S MEMORY PALACE"
               channelImage={jam}/>
            <VideoCard image={winner}
             title="AKAST WINS 2017 EDITION OF MATH AND SCIENCE QUIZ"
               views="2.3M Views"
               timestamp="3 years ago"
               channel="NATIONAL SCIENCE AND MATHS QUIZ"
               channelImage="https://nsmq.com.gh/wp-content/uploads/2016/05/NSMQ.png"/>
            <VideoCard image="https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2013/08/04/0/13/1323.jpg"
             title="HOW TO BECOME AN ORTHOPAEDIC SURGEON"
              channel="JAM ANATOMY"
               views="124K Views"
               timestamp="1 week ago"
               channelImage={doctor}/>
            <VideoCard image="https://miro.medium.com/max/10368/0*pvxN3V_WlNt9GVYq"
             title="LEARN THE SECRET OF SPEED READING"
              channel="READ WITH JAM"
               views="563K Views"
               timestamp="1 year ago"
               channelImage="https://miro.medium.com/max/720/0*9lnzJRE0oBbZrZcM.png"/>
            <VideoCard image="https://www.oxfordlearning.com/wp-content/uploads/2009/05/tips-for-easier-studying-860x420.jpg"
             title="HOW TO TAKE NOTES EFFECTIVELY"
              channel="JAM'S LEARNING SECRETS"
               views="23M Views"
               timestamp=" 24Hours ago"
               channelImage="https://entwickler.de/wp-content/uploads/2020/01/shutterstock_1065451166-900x450.jpg"/>
            <VideoCard image="https://raydalsayf.files.wordpress.com/2016/11/elon-reeve-musk.jpg"
             title="Why Elon Musk is the real Iron Man"
              channel="Jordan"
               views="1.5M Views"
               timestamp="8 days ago"
               channelImage="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"/>
            <VideoCard image="https://prod-discovery.edx-cdn.org/media/course/image/f89afe05-5ab1-42c3-be32-bc35a471d17d-5aa8d620b486.small.png"
             title="What is Biomedical Engineering"
              channel="BME FOLKS"
               views="12M Views"
               timestamp="5 minutes ago"
               channelImage="https://i2.wp.com/static.tumblr.com/aukw4xs/jigmaid6b/bme_logo_front.jpg"/>
            </div>
        </div>
    )
}

export default RecommendedVideos
