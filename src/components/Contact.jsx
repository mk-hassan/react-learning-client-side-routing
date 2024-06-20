import { Form, useActionData } from "react-router-dom";

export default function Contact() {
  const res = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="POST">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />

        <label htmlFor="msg">Message</label>
        <textarea name="message" id="msg" cols={40} rows={10} placeholder="Enter message"></textarea>

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}