// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom"

export default function CareerDetails() {
  const details = useLoaderData();

  // const params = useParams();
  // const [details, setDetails] = useState({});

  // useEffect(() => {
  //   fetch(`http://localhost:3000/careers/${params.careerId}`)
  //     .then(res => res.json())
  //     .then(data => setDetails(data));
  // }, []);

  return (
    <div className="career-details">
      <h3>{details.title}</h3>
      <p className="loc">Location: <span>{details.location}</span></p>
      <p className="salary">Salary: <span>{details.salary}</span></p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error expedita id atque ex animi molestias commodi ducimus temporibus corporis quia vel distinctio, tempora perspiciatis dolore libero eaque ipsam. Adipisci, ad.</p>
    </div>
  )
}