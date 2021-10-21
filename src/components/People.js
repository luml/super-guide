import React from "react"
import { Card, Avatar } from 'antd'

function Person({person}) {
  return (
    <div className="person">
      <Card title={person.name} style={{width: 800}}>
        <h3>
          {person.title}
        </h3>
        <Avatar src={person.img}/>
        <p>
          {person.bio}
        </p>
      </Card>
    </div>
  );
}

const People = ({people}) => {
    return (
      <div className="results">
        {people.map(function(person) {
          return <Person key={person.id} person={person} />;
        })}
      </div>
    );
}

export default People