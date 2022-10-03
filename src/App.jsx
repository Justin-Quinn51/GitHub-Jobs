import { useEffect, useState } from 'react'
import './index.css'
import Header from './components/Header'
import Tile from './components/Tile'
import JobsData from './data.json'

function App() {

const [jobRequirements, setJobRequirements] = useState([])

const handleClick = () => {
  setJobRequirements(prevState => !prevState)
}

const tiles = JobsData.map(data => {
  
  return (
    <Tile onClick={handleClick}
      key={data.id}
      logo={data.logo}
      company={data.company}
      newPost={data.newPost}
      featured={data.featured}
      position={data.position}
      role={data.role}
      level={data.level}
      postedAt={data.postedAt}
      contract={data.contract}
      location={data.location}
      languages={data.languages}
      tools={data.tools}
    />
  )
  
})


  return (
    <div className="App bg-background">
      <Header 
        { ...jobRequirements && 
          <>
            <div>languages</div>
          </>
        }
      />
      {tiles}
    </div>
  )
}

export default App
