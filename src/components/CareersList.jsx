import { useLoaderData, Link } from "react-router-dom";

export default function CareersList() {
  const careers = useLoaderData();

  return (
    <>
      {careers.map(career =>
        <div className="career-card" key={career.id}>
          <h3><Link to={`${career.id}`}>{career.title}</Link></h3>
          <p>{career.location} - {career.salary}</p>
        </div>
      )}
    </>
  )
}

export async function loadCareers() {
  const careers = await fetch('http://localhost:3000/careers');

  if (!careers.ok) {
    throw Error('The service is down now, we are working to solve it');
  }
  return careers.json();
}