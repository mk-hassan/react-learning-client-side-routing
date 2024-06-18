export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact Us</h3>

      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />

        <label htmlFor="msg">Message</label>
        <textarea name="message" id="msg" cols={40} rows={10} placeholder="Enter message"></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
}