import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const initialContent1 = {
        title: 'Lebron James',
        image: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ywjjv6pml5diu5cwid21',
    };

    const updatedContent1 = {
        title: 'Michael Jordan',
        image: 'https://media.cnn.com/api/v1/images/stellar/prod/160204101907-nba-slam-dunk-5.jpg?q=w_4725,h_2658,x_0,y_0,c_fill',
    };

    const initialContent2 = {
        title: 'Inception',
        image: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg',
    };

    const updatedContent2 = {
        title: 'Oppenheimer',
        image: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
    };

    const [child1Content, setChild1Content] = useState(initialContent1);
    const [child2Content, setChild2Content] = useState(initialContent2);

    const handleChildEvent = (childId) => {
        if (childId === 1) {
            setChild1Content((prevContent) =>
                prevContent.title === initialContent1.title ? updatedContent1 : initialContent1
            );
        } else if (childId === 2) {
            setChild2Content((prevContent) =>
                prevContent.title === initialContent2.title ? updatedContent2 : initialContent2
            );
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Pick your favorite athlete and movie from the given options</h1>
            {/* Pass content and event handler to children */}
            <ChildComponent id={1} content={child1Content} onButtonClick={handleChildEvent} />
            <ChildComponent id={2} content={child2Content} onButtonClick={handleChildEvent} />
        </div>
    );
};

export default ParentComponent;
