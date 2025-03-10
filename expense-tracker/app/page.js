import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/logo.png" alt="Expense Tracker" width={60} height={50} />
      <h1>Welcome to Expense Tracker</h1>
    </div>
  );
}
