export default async function careerDetailsLoader({ params: { careerId } }) {
  const details = await fetch(`http://localhost:3000/careers/${careerId}`);

  if (!details.ok) {
    throw Error('This career isnot found!');
  }
  return details.json();
}