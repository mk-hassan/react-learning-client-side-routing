import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const res = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <h2>{res && res.id}</h2>
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

export async function submitReview({ request }) {
  const formData = await request.formData();

  const submission = {
    email: formData.get('email'),
    message: formData.get('message')
  };

  let res = await fetch('http://localhost:3000/contacts', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });
  return await res.json();
}