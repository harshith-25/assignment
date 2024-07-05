import React, { useRef, useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./index.css"

function ImageUpload() {
	const InputRef = useRef(null);
	const [image, setImage] = useState("")

	const handleImageClick = () => {
		InputRef.current.click()
	}

	const handleImageChange = (e) => {
		const file  = e.target.files[0];
		setImage(e.target.files[0]);
	}

	return (
		<div onClick={handleImageClick} className='imageB'>
			<AddOutlinedIcon/> Add Design...
			{image ? (
				<img src={URL.createObjectURL(image)} alt="" className='image-display-after'/>
			) : ( <img src="" alt="" className='image-display-before'/> )}
			<input type="file" ref={InputRef} onChange={handleImageChange} style={{display: "none"}} />
		</div>
	)
}

export default ImageUpload