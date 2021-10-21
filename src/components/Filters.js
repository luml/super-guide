import React from "react"

const Filters = ({currentName, currentTitle, isIntern, updateFormState}) => {
  var titles = window.LMDirectory.titles;

  function updateName(evt) {
    updateFormState("currentName", evt.target.value);
  }

  function updateTitle(evt) {
    updateFormState("currentTitle", evt.target.value);
  }

  function updateIntern(evt) {
    updateFormState("isIntern", evt.target.checked);
  }

  function resetFilters() {
    //TODO doesn't have to call each time
    updateFormState("currentName", "")
    updateFormState("currentTitle", "")
    updateFormState("isIntern", false)
  }

  return (
    <form action="" id="directory-filters">
      <div className="group">
        <label htmlFor="person-name">Name:</label>
        <input
          type="text"
          name="person_name"
          placeholder="Name of employee"
          id="person-name"
          value={currentName}
          onChange={updateName}
        />
      </div>
      <div className="group">
        <label htmlFor="person-title">Job Title:</label>
        <select
          name="person_title"
          id="person-title"
          value={currentTitle}
          onChange={updateTitle}>
          <option value="">- Select -</option>
          {titles.map(function(title) {
            return (
              <option value={title.key} key={title.key}>
                {title.display}
              </option>
            );
          })}
        </select>
      </div>
      <div className="group">
        <label>
          <input
            type="checkbox"
            value="1"
            name="person_intern"
            checked={isIntern}
            onChange={updateIntern}
          />
          Intern
        </label>
      </div>
      <div className="group">
        <input
          type="reset"
          value="Reset"
          onClick={resetFilters}
        />
      </div>
    </form>
  );
}

export default Filters