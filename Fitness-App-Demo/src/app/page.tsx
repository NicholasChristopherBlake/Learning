import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <div className="navbar">
          <Link href="/workout">Create Workout</Link>
        </div>
      </header>
      <main className="mx-auto text-center"></main>
    </>
  );
}
