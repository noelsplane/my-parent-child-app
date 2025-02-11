import React from 'react';

const ChildComponent = ({id, content, onButtonClick}) => 
{
    const handleClick = () =>
    {
        onButtonClick(id);
    };


return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
        <h2>{content.title}</h2>
        <img src={content.image} alt={`Child ${id}`} style={{width: '200px', height: '200px'}} />
        <br />
            <button onClick={handleClick}>Click to change</button>
    </div>
    );
};

export default ChildComponent;