export default async function careersListLoader() {
  const careers = await fetch('http://localhost:3000/careers');

  if (!careers.ok) {
    throw Error('The service is down now, we are working to solve it');
  }
  return careers.json();
}