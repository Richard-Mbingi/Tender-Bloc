import React from 'react'
import DropDown from '../drop-down/DropDown'
import Textfield from '../textfield/Textfield'

const Form = () => {
     return (
          <div className="bg-white p-1 max-w-s flex flex-col my-6 rounded-t-3xl px-10 py-8">
               <Textfield />
               <Textfield />
               <DropDown />
               
          </div>
     )
}

export default Form
