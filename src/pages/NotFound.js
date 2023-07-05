import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className="not-found">
            <h1>Page you are looking for does not exist!</h1>
            <Link className="btn home" to='/'>Homepage</Link>

        </div>
    )
}

export default NotFound;