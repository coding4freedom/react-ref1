import React from 'react';
import Tweet from './Tweet';

const Tweets = (props) => {
    const tweets = [
        {
            name: 'Lenard',
            tweet: 'Coding take practice!',
            age: 21
        },
        {
            name: 'Kistal',
            tweet: 'Leveling up takes time!',
            age: 25
        },
        {
            name: 'Jonstel',
            tweet: 'I will not give up until im good at this!',
            age: 30
        }
    ]


    return (
        <section>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} message={tweet.tweet} age={tweet.age}/>
                ))}
        </section>
    );
};

export default Tweets;