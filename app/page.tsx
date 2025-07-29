import React from 'react'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'



const Home = () => {
  return (
    <Container className='bg-bikacho'>
         <h1 className='text-xl hover:font-semibold transition-transform hover:sclae-105 hover:cursor-pointer z-50 hover:text-kobra duration-300 '>Home
         </h1>
         <p className='text-lg ml-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla animi, natus repellat, maiores placeat numquam asperiores excepturi sequi perspiciatis accusantium debitis mollitia labore non dolorum harum quisquam dolore tempore vel!
          </p>
          <Button size={'lg'}>Check out</Button>
   
    </Container>
  )
}

export default Home
