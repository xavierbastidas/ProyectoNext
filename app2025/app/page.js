async function getSaludo() {
  const res = await fetch("http://localhost:4000/api/saludo");
  return res.json();
}
export default async function Home() {
  const data = await getSaludo();
  return (
    <div>
      <h1>Front Next.js</h1>
      <p>{data.message}</p>
    </div>
  );
}
