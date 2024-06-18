import { NavLink, Outlet } from "react-router-dom"

export default function Help() {
  return (
    <>
      <section className="help-header">
        <div className="container">
          <h2 className='main-title'>Help</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam neque delectus sapiente corrupti, suscipit repudiandae nobis earum cupiditate officiis itaque inventore assumenda libero quis, quae adipisci quibusdam rem illum voluptas.</p>
        </div>
      </section>
      <section className="help-nav">
        <div className="container">
          <div className="help-options">
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contect Us</NavLink>
          </div>
        </div>
      </section>
      <section className="help-content">
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  )
}