import React from 'react';

const Radio = () => {
  return (
    <div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Male"
            checked={this.state.selectedOption === "Male"}
            onChange={this.onValueChange}
          />
          Male
        </label>
        </div>
        <div className="radio">
        <label>
          <input
            type="radio"
            value="Female"
            checked={this.state.selectedOption === "Female"}
            onChange={this.onValueChange}
          />
          Female
        </label>
        </div>

    </div>
  )
}

export default Radio;




// switch (step) {
//   case 1:
//     setFullName(e.target.value)
//     break;
//   case 2:
//     setEmail(e.target.value)
//     break;
//   case 3:
//     setSwedbankId(e.target.value)
//     break;
//   default:
//     break;
// }