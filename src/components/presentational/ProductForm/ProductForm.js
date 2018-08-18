import React from 'react';

const ProductForm = (props) => {
    const { handleName, handleDescription, handlePrice, handlePictureUpload, name, description, price, picture } = props;
    return (
        <div>
            <form>
                <img src={picture} alt={name} />
                <input type='file' onChange={e => handlePictureUpload(e.target.files)} value={picture}/>
                <input type='text' onChange={e => handleName(e.target.value)} value={name}/>
                <input type='text' onChange={e => handleDescription(e.target.value)} value={description}/>
                <input type='text' onChange={e => handlePrice(e.target.value)} value={price}/>
            </form>
        </div>
    );
};

export default ProductForm;