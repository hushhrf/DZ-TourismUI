import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const PopularCards = (props) => {
    
  return (
      <Card
      shadow={false}
      className="relative grid h-[20rem] w-full max-w-[15rem] items-end justify-center overflow-hidden text-center rounded-lg group"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <img
                src={props.url}
                alt="Card Image"
                className="w-full h-full object-cover"
            />
        <div className="absolute inset-0 h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    >
      Explore
    </button>
        </div>
      
      </CardHeader>
      <CardBody className="relative py-4 px-6 md:px-12">
        <Typography
          variant="h4"
          color="white"
          className="mb-2 font-medium leading-[1.5] group-hover:opacity-0 transition-all duration-300"
        >
          {props.name}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default PopularCards