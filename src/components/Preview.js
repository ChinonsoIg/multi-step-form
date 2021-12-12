import React from 'react'

const Preview = ({ data }) => {

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Preview</h3>
      <hr />
      <div>
        {data.map((datum) => {
          return (
            <div key={datum.label}>
              <p>{datum.label}:</p>
              <p><i>{datum.value}</i></p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Preview;
