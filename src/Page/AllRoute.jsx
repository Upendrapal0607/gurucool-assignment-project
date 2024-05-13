import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FadeAnimationComponents } from '../Components/FadeAnimationComponents'
import { CarouselComponent } from '../Components/CarouselComponent'
import { RotationComponents } from '../Components/RotationComponents'

export const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<FadeAnimationComponents/>}/>
            <Route path = "/carousal" element = {<CarouselComponent/>}/>
            <Route path = "/rotate" element = {<RotationComponents/>}/>
        </Routes>
    </div>
  )
}
