
export default function Tile({logo, company, newPost, featured, position, postedAt, contract, location, role, level, tools, languages, key}) {
    
    return (
        <div className={ featured ? 'bg-white w-4/5 pb-2 mx-auto shadow-lg border-l-8 border-l-aqua my-6 lg:flex' : 'bg-white w-4/5 pb-2 mx-auto shadow-lg my-6 lg:flex' }>
          <section className='mt-12 leading-8 lg:flex'>
              <img className='ml-6 mb-2' src={logo} alt="Company Logo" />
            <div className='ml-6 lg:w-72'>
              <span className="text-aqua mr-6">{company}</span>
              { newPost === true && (<button className='text-white font-bold bg-aqua-dark rounded-full p-1.5 mr-2'>NEW!</button>) }
              { featured === true && (<button className='text-white font-bold bg-dark-green rounded-full p-1.5'>FEATURED</button>) }
              <h2 className='font-bold hover:text-aqua cursor-pointer'>{position}</h2>
              <span className="text-light-gray">{postedAt} <span className=''>&middot;</span> {contract} <span className=''>&middot;</span> {location}</span>
            </div>
          </section>
          <hr className='mt-3 underline lg:hidden'/>
          <section className='flex flex-wrap gap-3 ml-6 my-3 mx-2 lg:ml-auto pr-20 items-center'>
            <div className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{role}</div>
            <div className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{level}</div>
            { languages.map((language) => <div key={key} className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{language}</div>) }
            { tools.map((tool) => <div key={key} className='bg-zinc-200 p-1.5 text-aqua hover:bg-aqua cursor-pointer hover:text-white'>{tool}</div>) }
          </section>
        </div>
    )

}