import React from 'react'
import DevIcon from "devicon-react-svg";
import {tech} from '../../helpers/tech'
import './technologies.css'

function Technologies() {
  return (
    <div className='technologies_container' id='technologies' >
      <div> 
        <h1 style={{textAlign: 'center'}}>TECHNOLOGIES I WORKED WITH</h1>
      </div>
      <div className='tech_cards_container'>
        {tech.map((e, idx) => {
          return (
            <div key={idx} className="tech_card"> 
                <DevIcon className='tech_icons' icon={e.iconName} />
                <span style={{margin: '5px', fontSize: '1.5 rem'}}>{e.name}</span>
            </div>
          )
        })}
       
      </div>
    </div>
  )
}

export default Technologies
