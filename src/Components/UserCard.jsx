import React from 'react';

const UserCard =  (props) => {
    return (
        <div>
            <h2>{props.data.name.first}</h2>
        </div>
    )
};

export default UserCard;