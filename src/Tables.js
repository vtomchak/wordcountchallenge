import React from 'react';

const Tables = (props) => {
  const prop = props.props;
  const { title, label } = props;

  return (
    <div>
      <table className='ui celled striped table'>
        <thead>
          <tr>
            <th colSpan='3'>{title}</th>
          </tr>
          <tr>
            <th>{label}</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(prop)
            .sort((a, b) => b[1] - a[1])
            .map((data) => {
              return (
                <tr key={data[0]}>
                  <td className='collapsing'>{data[0]}</td>
                  <td className='right aligned collapsing'>{data[1]}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
