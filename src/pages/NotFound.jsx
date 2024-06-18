import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="error-message"><span>Oops!</span> Not Found...</p>
      <p>return to <Link to='/'>Home</Link> page</p>
    </div>
  )
}