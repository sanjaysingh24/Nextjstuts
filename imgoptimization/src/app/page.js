import Image from "next/image";
import Profile from '../../public/next.svg'

export default function Home() {
 
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<main className="text-xl ">Image optimization in next js</main>
{/* <Image src={Profile} alt="hey"></Image>
<img src={Profile.src}></img> */}
{/* image from external source */}
<Image src="https://www.pexels.com/photo/brown-and-green-mountain-view-photo-842711/" alt="new image" width={300} height={600}>

</Image>
    </div>
  );
}
