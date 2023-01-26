import React from "react";

const Card = ({name, email, id}) => {
    // {const {name, email, id } = props;} destractoring
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot pics" />
            <div>
                <h2>{name}</h2> {/*without destractoring props.name*/}
                <p>{email}</p> {/*without destractoring props.email*/}
            </div>
        </div>
    )
}

export default Card;