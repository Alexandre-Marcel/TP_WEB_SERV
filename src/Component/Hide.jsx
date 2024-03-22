function Hide({ onHideIdChange }) {
    return (
      <div>
        <input type="checkbox" onChange={onHideIdChange} />
        <label htmlFor="hide">Hide id</label>
      </div>
    );
  }

  export default Hide