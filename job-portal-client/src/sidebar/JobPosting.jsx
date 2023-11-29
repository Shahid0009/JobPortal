import React from 'react'
import Inputfield from './../components/Inputfield';

const JobPosting = ({handleChange}) => {
  return (
<div>
      <h4>Location</h4>
      <div>
        <Inputfield
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        />
        <Inputfield
          handleChange={handleChange}
          value="london"
          title="London"
          name="test"
        />
        <Inputfield
          handleChange={handleChange}
          value="san francisco"
          title="san francisco"
          name="test"
        />
        <Inputfield
          handleChange={handleChange}
          value="Madrid"
          title="Madrid"
          name="test"
        />
        <Inputfield
          handleChange={handleChange}
          value="seattle"
          title="seattle"
          name="test"
        />
      </div>
    </div>  )
}

export default JobPosting