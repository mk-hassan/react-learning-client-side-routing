export default async function submitContactForm({ request }) {
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

  return res.json();
}