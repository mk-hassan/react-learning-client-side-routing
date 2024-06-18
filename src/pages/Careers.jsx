import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <>
      <section className="careers">
        <div className="container">
          <h2 className='page-title'>Careers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque delectus sapiente corrupti, suscipit repudiandae nobis earum cupiditate officiis itaque inventore assumenda libero quis, quae adipisci quibusdam rem illum voluptas.</p>
        </div>
      </section>
      <section className="careers-contnet">
        <div className="container">
          {careers.map(career =>
            <div className="career-card" key={career.id}>
              <h3><Link to={`${career.id}`}>{career.title}</Link></h3>
              <p>{career.location} - {career.salary}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export async function loadCareers() {
  const careers = await fetch('http://localhost:3000/careers');

  return careers.json();
}