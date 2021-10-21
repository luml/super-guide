import React from "react"
import { Card, Avatar } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import 'animate.css';

function Person({person}) {
  return (
    <div className="person">
      <Card title={person.name}>
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
  // TODO animate.css class names don't work yet
    return (
      <div className="results">
      <TransitionGroup>
        {people.map(function(person) {
          return (
            <CSSTransition
              key={person.id} 
              classNames="fade"
              // classNames={{
              //   enter: 'animate',
              //   enterActive: 'animate__zoomIn',
              //   exit: 'animate',
              //   exitActive: 'animate__zoomOut'
              // }}
              timeout={500}>
              <Person person={person} />
            </CSSTransition>
          )
        })}
        </TransitionGroup>
      </div>
    );
}

export default People