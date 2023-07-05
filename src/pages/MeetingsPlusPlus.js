import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function MeetingsPlusPlus() {
    const [submitStatus, setSubmitStatus] = useState(false);
    const titleInput = useRef();
    const imgInput = useRef();
    const dateInput = useRef();
    const descriptionInput = useRef();
    const LinkInput = useRef();
    const navigate = useNavigate();

    function addMeetingHandler() {
        setSubmitStatus(true);
        const titleData = titleInput.current.value;
        const imgData = imgInput.current.value;
        const dateData = dateInput.current.value;
        const descriptionData = descriptionInput.current.value;
        const LinkData = LinkInput.current.value;
        if (titleData !== '' && imgData !== '' && dateData !== '' && descriptionData !== '' && LinkData !== '') {
        const tempMeeting = {
            title: titleData,
            img: imgData,
            date: dateData,
            description: descriptionData,
            link: LinkData,
        }
        fetch('https://meetingwebapp-68207-default-rtdb.firebaseio.com/meetings.json', {
            method: 'post',
            body: JSON.stringify(tempMeeting)
        }).then(() => {
            setSubmitStatus(false)
            navigate('/');
            
        })
        }
        else {
            console.log('Fill all the fields');
            setSubmitStatus(false);

        }
    }
    return (
        <div className="add-meetings-container">
            <h1>Schedule A Meeting</h1>
            <p>Add a new meeting into my work !!</p>
            <input placeholder="Enter the title" ref={titleInput} />
            <input placeholder="Enter the image tag" ref={imgInput} />
            <input placeholder="Enter the data and time" ref={dateInput} type='datetime-local'/>
            <textarea rows='3' col='3' placeholder="Enter the description" ref={descriptionInput} />
            <input placeholder="Enter the meeting link" ref={LinkInput} />
            <button className="btn" onClick={addMeetingHandler}>Meeting++<div className={submitStatus ? "loader" : "d-none"} > </div> </button>

            <p className="small">By creating a new meeting I agree to the disciplinary terms of attending them without fail.</p>
        </div>
)
}
export default MeetingsPlusPlus;