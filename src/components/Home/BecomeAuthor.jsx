import React from 'react'
import { Typography,Button } from '@material-tailwind/react'
import {AiFillCaretRight} from 'react-icons/ai'


export default function BecomeAuthor() {
  return (
    <div className='w-full  flex flex-col items-center my-[2rem] md:my-[4rem]'>
        <Typography variant='h3' color='white' className='text-center mb-4'>Become an Author</Typography>
        <Typography variant='h6' color='white' className='text-center max-w-[600px]'>Are you passionate about sharing your knowledge and insights with others? Do you have expertise in a specific topic or field that you want to showcase to a wider audience? If so, we invite you to write an article for us and join our community of contributors. We are looking for original, high-quality, and well-researched articles on topics related to our website's theme and mission. Become an Author and share your knowledge with the world. </Typography>
        <Button color='purple' className='mt-6 rounded-full'>
            <Typography variant='h5' className='text-white flex items-center capitalize gap-2'>
                Become an Author <AiFillCaretRight className='text-2xl'/>   
            </Typography>
        </Button>
    </div>
  )
}
