import React, { useState } from 'react'
import "./Product.css"
import ToDoList from './TodoList';

function InitialVariant() {

	return (
		<>
			<div className='grid grid-nav'>
				<span></span>
				<section className='nav'>Product Filter</section>
				<section className='nav'>Primary Variant</section>
				<section className='nav'>Variant 2</section>
				<section className='nav'>Variant 3</section>  
			</div>
			<ToDoList/>
		</>
	)
}

export default InitialVariant