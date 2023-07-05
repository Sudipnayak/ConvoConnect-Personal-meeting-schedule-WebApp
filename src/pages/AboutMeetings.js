import './style.css';
function AboutMeetings() {
    return (
        <div className="container">
         <div className="text-center">
            <h1>Online meeting software for all your video conferencing & webinar needs.</h1>
                <p> ConvoConnect Meeting is a secure online meeting platform and webinar solution that helps people find new ways to collaborate and work remotely with efficacy. Enhance your remote collaboration experience today with our highly secure online meeting software.</p>
                
                </div>
                <div className="video-content">
                <video poster="https://source.unsplash.com/1600x800/?onlinemeeting"  width="100%" height="100%" controls autoplay loop>
                    <source src="../content/Introvideo.mp4" type="video/mp4" />
                </video>
                                                                     
              </div>
        </div>
        
       
    )
}

export default AboutMeetings;