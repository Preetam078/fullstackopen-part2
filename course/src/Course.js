import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

const Course = ({course}) => {
  return (
    <div>
        <Header head={course.name}></Header>
        <Content parts={course.parts}></Content>
    </div>
  )
}

export default Course