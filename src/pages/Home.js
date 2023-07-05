import { useEffect, useState } from 'react';
import MeetingCard from '../components/MeetingCard';
function Home() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [meetings, setMeetings] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(true);
    useEffect(() => {
        fetch('https://meetingwebapp-68207-default-rtdb.firebaseio.com/meetings.json').then(
            response => response.json()).then(data => {

                const tempMeetings = [];
                for (const key in data) {
                    const meeting = {
                        id: key,
                        ...data[key]
                    }
                    tempMeetings.push(meeting);
                    setMeetings(tempMeetings);
                    setLoadingStatus(false);
                }
            }
            )
    }, [])
    return (

        <div className="">
            <div className="meet-heading">
              <p>All My Scheduled Meetings</p>
            </div>
            <div className={loadingStatus ? "main-page-loader" : "d-none"}></div> 
        <div className="meeting-container">
            
       {
                    meetings.sort((a, b) => {
                        let dateA = new Date(a.date);
                        let dateB = new Date(b.date);
                        // Comparing and sort the dates
                        if (dateA < dateB)
                            return -1;
                        else if (dateA > dateB)
                            return 1;
                        else
                            return 0;
                    }).filter((meeting) => {
                        let today = new Date();
                        return (new Date(meeting.date) > today);
                    }).map((meeting) => {
           let date = new Date(meeting.date);
           let formatedDate = date.toLocaleDateString('en', options)
                        let formatedTime = date.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit" });
                        let formatedMeetingTime = formatedTime + " " + formatedDate
           return <MeetingCard title={meeting.title} img={meeting.img} description={meeting.description} date={formatedMeetingTime} link={meeting.link} />
       })        
    }
        
        </div>
        </div>
)
}
export default Home;