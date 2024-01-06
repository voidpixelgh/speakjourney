import { getServerSession } from "next-auth";

export default async function About() {
  const user = await getServerSession();
  console.log(user);
  return (
    <main>
      <h2>About</h2>
    </main>
  );
}
