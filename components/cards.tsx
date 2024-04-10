import React from 'react'
import { PinContainer } from './ui/threedcardpin'
import { CardContainer, CardBody, CardItem } from './ui/threedcard'
import Image from "next/image";
function Cards() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>  
    {/* <PinContainer
    title="/ui.aceternity.com"
    href="https://twitter.com/mannupaaji"
  >
    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
        Aceternity UI
      </h3>
      <div className="text-base !m-0 !p-0 font-normal">
        <span className="text-slate-500 ">
          Customizable Tailwind CSS and Framer Motion Components.
        </span>
      </div>
      <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
    </div>
  </PinContainer> */}
    <CardContainer className="inter ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-base font-bold text-neutral-600 dark:text-white"
        >
          Amidst the green.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover me
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/p1.png"
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
    
      </CardBody>
    </CardContainer>
  <CardContainer className="inter lg:ml-40">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-base font-bold text-neutral-600 dark:text-white"
        >
         beyond the waves.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover me
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/p2.png"
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
    
      </CardBody>
    </CardContainer>
  </div>
  )
}

export default Cards