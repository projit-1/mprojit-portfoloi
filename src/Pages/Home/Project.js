import React from 'react';
import Button from '../Shared/Button'

const Project = ({ project }) => {
    const { image, name, description } = project
    return (
        <div>
            <div class="bg-base-100 ">
                <figure> <img src={image} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className=" flex justify-center items-center">
                        <Button>Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;