import Image from "next/image";
import {Roboto} from "next/font/google"
const roboto = Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})
export default function Home() {
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hey  it is a Font Optimization</h1>
    {/* <h1 style={{fontFamily:"Roboto",fontWeight:100}}>Font Optimization</h1> */}
    <h1 className={roboto.className}>Font with Next js font feature</h1>
      </main>

    </div>
  );
}
