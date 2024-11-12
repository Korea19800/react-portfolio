import {RiReactjsLine} from "react-icons/ri"; // react icon 갖고오기
import {TbBrandNextjs} from "react-icons/tb"; // react icon 갖고오기
import {SiMongodb} from "react-icons/si"; // react icon 갖고오기
import {DiRedis} from "react-icons/di"; // react icon 갖고오기
import {FaNodeJs} from "react-icons/fa"; // react icon 갖고오기
import {BiLogoPostgresql} from "react-icons/bi"; // react icon 갖고오기

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        
        {/* 아래는 테크스택 아이콘들 */} 
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbBrandNextjs className="text-7xl"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className="text-7xl text-green-500"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiRedis className="text-7xl text-red-700"/>
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className="text-7xl text-green-500"/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoPostgresql className="text-7xl text-sky-700"/>
        </div>

      </div>
      
    </div>
  )
}

export default Technologies
