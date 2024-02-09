import Link from "next/link";

export default function StudentInfo() {
  return (
    <main>
      <p>Gigi Vu</p>
      <p>
        <Link
          className="text-blue-500 hover:text-blue-800"
          href={`https://github.com/gigi-vu2804`}
        >
          Github Link
        </Link>
      </p>
    </main>
  );
}
