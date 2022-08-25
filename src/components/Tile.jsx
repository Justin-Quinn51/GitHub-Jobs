

export default function Tile({logo, company, newPost, featured, position, postedAt, contract, location, role, level, tools, languages, id}) {
    
    return (
        <div className='bg-white w-5/6 mx-auto '>
          <section className='ml-3 leading-8'>
            <img className='mb-2' src={logo} alt="Company Logo" />
            <span className="text-aqua mr-2">{company}</span>
            { newPost === true && (<button className='text-white font-bold bg-aqua-dark rounded-full p-1.5 w-16 mr-2'>NEW!</button>) }
            { featured === true && (<button className='text-white font-bold bg-dark-green rounded-full p-1 w-28'>FEATURED</button>) }
            <h2 className='font-bold'>{position}</h2>
            <span className="text-light-gray">{postedAt} <span className=''>&middot;</span> {contract} <span className=''>&middot;</span> {location}</span>
          </section>
          <hr className='mt-3 underline'/>
          <section className='flex gap-3 my-3 mx-2 h-10 w-5'>
            <div className='bg-zinc-200 p-1.5 text-aqua'>{role}</div>
            <div className='bg-zinc-200 p-1.5 text-aqua'>{level}</div>
            { tools && (<div className='bg-zinc-200 p-1.5 text-aqua'></div>) }
            { languages && (<div className='bg-zinc-200 p-1.5 text-aqua'></div>) }
            <div className='bg-zinc-200 p-1.5 text-aqua'>JavaScript</div>
          </section>
        </div>
    )

}