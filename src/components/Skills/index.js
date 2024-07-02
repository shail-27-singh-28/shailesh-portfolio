import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  const skillsData = [
    { name: 'React js', level: 'Expert' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Expert' },
    { name: 'MySql', level: 'Intermediate' },
  ]

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>

          <p>
            Hello! I'm [Shaielsh Singh], a budding React.js developer with a passion
            for building interactive and responsive web applications. I recently
            Complete Internship with a Certificate in [Full Stack Developer] from [CETPA Infotech pvt ltd],
            where I developed a strong foundation in web development and modern
            JavaScript frameworks.
          </p>
        </div>
        <div className="info-card">
          {skillsData.map((skill, index) => (
            <div className="skill-card">
            <motion.div
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.4 }}
            >
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </motion.div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills

