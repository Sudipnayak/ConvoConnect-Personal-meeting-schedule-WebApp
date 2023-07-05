import { Link } from "react-router-dom";
function Navigationbar (){
return (
<div className="navbar">
 <nav className="nav">
            <Link to='/' className='link logo'>ConvoConnect</Link>
            <div>
                <Link to='/' className='link'><b>About Page</b></Link>
                <Link to='/scheduled-meetings' className='link'><b>Scheduled Meetings</b></Link>
                <Link to='/add-meetings' className='link'><b>Schedule Meeting</b></Link>
            </div>
            
 </nav>
</div>


)
}
export default Navigationbar;