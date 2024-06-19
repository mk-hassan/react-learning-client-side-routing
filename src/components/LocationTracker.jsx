import { Link, useLocation } from "react-router-dom";

export default function LocationTracker() {
  const location = useLocation();

  let pathBuilder = '';

  let paths = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      pathBuilder += crumb;
      return (
        <li key={crumb}>
          <Link to={`/${pathBuilder}`}>
            {crumb}
          </Link>
        </li>
      )
    });

  return (
    <ul className="horizontal bread-crumbs">
      {paths}
    </ul>
  )
}
