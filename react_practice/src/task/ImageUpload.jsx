import React, { useState } from 'react'

const ImageUpload = () => {
    const [file,setFile] = useState(null);

    const handleFile = (e)=>{
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
 
    }

    console.log(file)
  return (
    <div>
        <div>ImageUpload</div>
        <div>
            {/* file include pdf images and different type of files */}
            <input type="file" accept='image/*' name="upload" id="upload" onChange={handleFile} />
        </div>
        <div>
            {file && <img src={URL.createObjectURL(file)} alt="Image" /> }
        </div>
    </div>
  )
}

export default ImageUpload