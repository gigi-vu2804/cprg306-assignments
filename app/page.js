import Link from "next/link";

export default function Home() {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 10];
  const doneUpTo = 10;
  const liStyling = "hover:text-green-400 hover:underline";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2</h1>
        <h2 className="text-2xl font-bold mb-5">Assignments</h2>
        <div className="text-lg">
          <ul>
            {weeks.map((week) => (
              <li key={week} className={liStyling}>
                <Link href={`/week-${week}`}>Week {week}</Link>
              </li>
            ))}
          </ul>

          <br />
          <h2 className="text-2xl font-bold mb-5">Personal Projects</h2>
          <ul>
            <li className={liStyling}>
              <Link href={`/gigi-shopping-planner`}>
                Gigi - Shopping Planner
              </Link>
            </li>
            <li className={liStyling}>
              <Link href={`/gigi-task-management`}>Gigi - Task Management</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
