import { Outlet } from "react-router-dom";

export default function Careers() {
  return (
    <>
      <section className="careers">
        <div className="container">
          <h2 className='page-title'>Careers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque delectus sapiente corrupti, suscipit repudiandae nobis earum cupiditate officiis itaque inventore assumenda libero quis, quae adipisci quibusdam rem illum voluptas.</p>
        </div>
      </section>
      <section className="careers-content">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  )
}