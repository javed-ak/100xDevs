import Image from "next/image";
import { UserCard } from "./components/UserCard";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <UserCard />
    </div>
  );
}
