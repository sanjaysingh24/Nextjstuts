import Image from "next/image";
import custom from './page.module.css'
import other from './other.module.css'
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    
    <h1 className={custom.main}>hello this is heading 2 </h1>
    <h2 className={other.main}> this one is the second heading</h2>

        </div>
  );
}
