import Image from "next/image"
import { Shuffle, SkipBack, SkipForward, Play, Mic2, LayoutList, Laptop2, Volume, Maximize2, Repeat } from "lucide-react"

export default function Footer() {
    return(
        <footer className='bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image src='/album.jpg' width={48} height={48} alt="capa do album" className='w-full rounded'/>
          <div className='flex flex-col'>
            <strong className='font-normal'>Witness</strong>
            <span className='tet-xs text-zinc-400'>Trip Lee</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='items-center flex gap-4'>
            <Shuffle/>
            <SkipBack/>
            <button className='p-2 rounded-full bg-white text-black ml-auto  w-12 h-12 flex items-center justify-center'>
              <Play/>
            </button>
            <SkipForward/>
            <Repeat/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400 '></span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400 '></span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className='flex items-center'>
              <Volume size={20}/>
              <div className='h-1 rounded-full w-20 bg-zinc-600'>
                <div className='bg-zinc-200 w-16 h-1 rounded-full'></div>
              </div>
            </div>
            <Maximize2 size={20}/>
        </div>
      
      </footer>
    )
}