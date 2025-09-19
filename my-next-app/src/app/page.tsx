import Link from "next/link";

export default function Home() {
  console.log("Hello world");
  
  return (
    <div className=""> 
    <h1>Hello next.js</h1>
    <Link href={"/about"}>About</Link>
    </div>
    
  );
}
