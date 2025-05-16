import React from 'react';
// import SKILLS from './SKILLS.json';
import SkillItem from '../SkillItem/SkillItem';

const AllSkill = ({ data }) => {
    // console.log("props", props);
    // const { data } = props
    return (
        <ul className='Skill'>
            {data.map((item) => (
                <SkillItem data={item}/>
            ))}
        </ul>
    );
};

export default AllSkill