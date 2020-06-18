import React from 'react';
export default function ContainerSection(props) {
    return (
        <div className="container-section">
            <div className="container-logo">
                <div id={props.id}>
                </div>
            </div>
            <div className="project-title">
                {props.title}
            </div>
            <p className="project-description">
                {props.description}
            </p>
        </div>
    )
}
 