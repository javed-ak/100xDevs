import { Inter } from "next/font/google";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <>
  <AppBar />
  <VideoGrid />
  </>
}
