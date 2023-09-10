import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, Shuffle, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex flex-1'>
        <Sidebar/>
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/20 p-1'>
              <ChevronRight/>
            </button>
          </div>
          <h1 className='font-semibold mt-10 text-3xl'>Good Afternoon</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a className='bg-white/10 rounded overflow-hidden hover:bg-white/28 transition-colors group flex items-center'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album"/>
              <strong className='pl-6'>The End</strong>
              <button className='p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center p1-1 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden hover:bg-white/28 transition-colors group flex items-center'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album"/>
              <strong className='pl-6'>The End</strong>
              <button className='p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center p1-1 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden hover:bg-white/28 transition-colors group flex items-center'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album"/>
              <strong className='pl-6'>The End</strong>
              <button className='p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center p1-1 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden hover:bg-white/28 transition-colors group flex items-center'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album"/>
              <strong className='pl-6'>The End</strong>
              <button className='p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center p1-1 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden hover:bg-white/28 transition-colors group flex items-center'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album"/>
              <strong className='pl-6'>The End</strong>
              <button className='p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center p1-1 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
            <a className='bg-white/10 rounded overflow-hidden hover:bg-white/28 transition-colors group flex items-center'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album"/>
              <strong className='pl-6'>The End</strong>
              <button className='p-2 rounded-full bg-green-400 text-black ml-auto mr-8 w-12 h-12 flex items-center justify-center p1-1 invisible group-hover:visible'>
                <Play/>
              </button>
            </a>
          </div>
          <h1 className='font-semibold mt-10 text-3xl'>Made for Jairo Junior</h1>
          <div className='grid grid-cols-8 gap-4 mt-4 p-2'>
            <a className='bg-white/5 p3 rounded hover:bg-white/10 flex flex-col gap-2 p-3'>
              <Image src='/album.jpg' width={104} height={104} alt="capa do album" className='w-full rounded'/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Trip Lee, Wande</span>
            </a>
          </div>
        </main>
      </div>     
      <Footer/>
    </div>
  )
}
