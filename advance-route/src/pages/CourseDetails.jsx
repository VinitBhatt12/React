import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    const param = useParams()
  return (
    <div>
    <h3>{param.id} Course's Details</h3>
    </div>
  )
}

export default CourseDetails
