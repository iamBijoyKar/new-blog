import React from 'react'
import PropTypes from 'prop-types'
import {Typography,Card,CardBody} from '@material-tailwind/react'

BlogPreview.propTypes = {
  title: PropTypes.string,
  pubDate: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array,
  count: PropTypes.number,
  description: PropTypes.string,
  uuid: PropTypes.string,
  url: PropTypes.string
}

export default function BlogPreview({ title, pubDate, author, tags, count, description, uuid, url }){
  // console.log("title", tags)
  return (
    <Card className="min-w-[300px] md:w-[600px] bg-white">
      <CardBody className='py-4 px-6'>
      <Typography variant="h4" className="text-[#504099] overflow-hidden text-ellipsis md:whitespace-nowrap">
        {title}
      </Typography>
      <div className="flex justify-between items-center mb-2">
        <p className="italic text-sm">Published on : <span className="">{pubDate}</span></p>
        <p className="italic text-sm">Author : {author}</p>
      </div>
      <p className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-[#504099] px-2 border-[#504099] border rounded-full">{tag}</span>
        ))}  
        
      </p>
      <p className="mt-2 text-sm ">
        {description}
      </p>

      </CardBody>
    </Card>
  )
}