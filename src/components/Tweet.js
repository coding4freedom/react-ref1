import React from 'react';

const Tweet = (props) => (
    <div>
        <h1>{props.name} has sent you a tweet, by the way there age is {props.age}</h1>
        <p>The tweet is: {props.message}</p>
    </div>
);

export default Tweet;