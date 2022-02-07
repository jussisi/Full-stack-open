import React from 'react'

const Header = (props) => {
  return (
  <div>
    {props.course} 
  </div>  
  )
  }
  const Content = (props) => {
    return (
    <div>
    <p>{props.content1}</p>
    <p>{props.content2}</p>
    <p>{props.content3}</p>
    </div>  
    )
    }
    const Total = (props) => {
      return (
      <div>
      <p>Number of exercises {props.total}</p>
      </div>  
      )
      }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
    
    <h1><Header course={course}/></h1> 
      
    <Content content1={part1 + " " + exercises1}/>
    <Content content2={part2 + " " + exercises2}/>
    <Content content3={part3 + " " + exercises3}/>

    <Total total={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

export default App