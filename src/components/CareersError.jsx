import { useRouteError, Link } from "react-router-dom"

export default function CareersError() {
  const error = useRouteError();

  return (
    <div className="careers-error">
      <h3>{error.message}</h3>
      <p>Return Back to <span><Link to='/'>Home</Link></span> page</p>
    </div>
  )
}
