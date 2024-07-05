import React, { useState } from 'react'
import "./Product.css"
import ImageUpload from './ImageUpload';

function InitialProduct() {

	return (
		<>
			<section>
				<div className='grid head'>
					<div className="filter">
						<span className='desc'>tags....</span>
						<span className='desc'>contains</span>
						<span className='desc'>onsale</span>
					</div>
					<div className="primary">
						<ImageUpload/>
					</div>
					<div className="variant2">
						<ImageUpload/>
					</div>
					<div className="variant3">
						<ImageUpload/>
					</div>
				</div>
			</section>
		</>
	)
}

export default InitialProduct