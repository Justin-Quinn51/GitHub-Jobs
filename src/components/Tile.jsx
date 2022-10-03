import {useState} from 'react'
import Popup from './popup'

export default function Tile({logo, company, newPost, featured, position, postedAt, contract, location, role, level, tools, languages, key}) {

  const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div className={ featured ? 'bg-white w-5/6 pb-1 mx-auto shadow-lg border-l-4 border-l-aqua my-6 lg:flex py-3' : 'bg-white w-5/6 pb-2 mx-auto shadow-lg my-6 lg:flex py-3' }>
          <Popup trigger={buttonPopup} />
          <section className='lg:flex items-center'>
              <img className='ml-6 mb-2 lg:mt-2' src={logo} alt="Company Logo" />
            <div className='ml-6 lg:'>
              <span className="text-aqua font-bold mr-6 lg:mr-3">{company}</span>
              { newPost === true && (<button className='text-white font-bold bg-aqua-dark rounded-full px-2 py-0.5 mr-2'>NEW!</button>) }
              { featured === true && (<button className='text-white font-bold bg-dark-green rounded-full px-2 py-0.5'>FEATURED</button>) }
              <h2 className='font-bold hover:text-aqua cursor-pointer lg:text-lg'>{position}</h2>
              <span className="text-light-gray lg:flex gap-4">{postedAt} <span className=''>&middot;</span>   {contract} <span className=''>&middot;</span> {location}</span>
            </div>
          </section>
          <hr className='mt-3 underline lg:hidden'/>
          <section className='flex flex-wrap gap-3 ml-6 my-3 lg:ml-auto pr-20 items-center'>
            <div onClick={() => setButtonPopup(true)} className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{role}</div>
            <div className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{level}</div>
            { languages.map((language) => <div key={key} className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{language}</div>) }
            { tools.map((tool) => <div key={key} className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{tool}</div>) }
          </section>
        </div>
    )

}