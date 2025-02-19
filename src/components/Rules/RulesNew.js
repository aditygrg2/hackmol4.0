import { rule } from 'postcss'
import React, { useEffect, useState } from 'react'
import Hackmol4 from '../../../public/Hackmol4.png'
import RulesPoints from './RulesPoints'

function RulesNew() {
  const [rules, setRules] = useState([{}])

  useEffect(() => {
    setRules([
      { color: '#FFEB01', rule: 'Each team would comprise of 1 to 4 members ' },
      {
        color: '#FF6F0F',
        rule: 'Team members could be from different institutions as well',
      },
      {
        color: '#5C40EC',
        rule: 'The idea submission begins on 15th Jan,2023 and ends on 30th Jan,2023',
      },
      {
        color: '#FFEB01',
        rule: 'Only one person in the team would be the team leader who is required to register on behalf of all the members',
      },
      {
        color: '#D0A4FF',
        rule: 'You have to submit your idea via PPT and the Ideation round will be conducted where best ideas will get to participate in the in-person hackathon at NIT Jalandhar',
      },
      {
        color: '#94E95D',
        rule: 'All work on a project should be done during the HackMol. Your code repository must be initialized at the beginning of HackMol itself',
      },
    ])
  }, [])

  return (
    <div
      id='rules'
      className='rulesNew w-full  bg-white flex justify-center flex-col md:flex-row overflow-auto '>
      <div className='rulesLeft border-y-2  border-black  white flex flex-col md:flex-row '>
        <div className='md:w-1/2 py-10  md:py-20 '>
          <div className=' px-8 flex flex-col justify-center items-center '>
            <div className='rules__title text-4xl mb-6 font-bold font-Space-Grotesk'>
              RULES
            </div>
            <div className='rules__desc mb-10 font-Plus-Jakarta text-center'>
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi quam, distinctio ut non ipsum saepe reprehenderit dolores iusto adipisci hic veritatis possimus, esse, totam magni et ea ratione illo? */}
              All the submissions will be reviewed by the organizing committee &
              fixed top submissions will qualify for review by a panel of judges.
              Finalist teams may be called for special presentation with the
              Judges.
            </div>
            <div className='rules__list  space-y-8  '>
              {rules.map((ele, i) => {
                return <RulesPoints Desc={ele.rule} color={ele.color} key={i} />
              })}
            </div>
          </div>
        </div>
      <div  className='w-1/2 hidden md:flex items-center justify-center  border-l-2 border-black ' >
        <img src={Hackmol4.src} alt='' className='rulesRight  w-8/12 ' />
      </div>
      </div>
    </div>
  )
}

export default RulesNew
