import React from 'react';
import Button from '../Button/Button';
import Image from '../Image/Image'

const SkillItem = ({ data }) => (
    <li>
        <h3>{data.Skill}</h3>
        {/* <img src={data.image} /> */}
        <Image imgSrc={data.image}/>
        <span className='history'>amount of experience : {data.history}</span>
        <span className='numberSpan'>{data.Number}</span>
        {/* <Button text="Add to card" /> */}
        <Button>
            Add to card
        </Button>
    </li>
);

export default SkillItem