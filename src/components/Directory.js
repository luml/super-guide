import React from "react"
import People from "./People"
import Filters from "./Filters"

class Directory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      people: window.LMDirectory.people,
      currentName: '',
      currentTitle: '',
      isIntern: false
    }

    this.updateFormState = this.updateFormState.bind(this)
  }

  updateFormState(obj) {
    this.setState(obj, this.updatePeopleList)
  }

  updatePeopleList() {
    const filteredPeople = window.LMDirectory.people.filter((person) => {
        return (
          person.intern === this.state.isIntern &&
          (this.state.currentName === "" ||
            person.name.toLowerCase().indexOf(this.state.currentName.toLowerCase()) !==
              -1) &&
          (this.state.currentTitle === "" ||
            person.title_cat === this.state.currentTitle)
        );
      }
    );

    this.setState({
      people: filteredPeople
    });
  }

  render() {
    return (
      <div className="company-directory">
      <h2>Company Directory</h2>
      <p>Learn more about each person at Leaf & Mortar in this company directory.</p>
      <Filters
            currentName={this.state.currentName}
            currentTitle={this.state.currentTitle}
            isIntern={this.state.isIntern}
            updateFormState={this.updateFormState}
          />
      <People people={this.state.people} />
    </div>
    )
  }
}

export default Directory