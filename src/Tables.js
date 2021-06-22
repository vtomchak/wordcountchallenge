import React from 'react';

const Tables = (props) => {
  const prop = props.props;
  const { title, label } = props;
  // console.log('PROPS IN TABLEEEE', props.props);
  // console.log('PROPS IN TABLE TITLE', props.title);
  // console.log('PROPS IN TABLEEEE', prop);
  // console.log('PROP ENTRIES', Object.entries(prop));
  // const map = Object.entries(prop).map((data) => {
  //   return data[1];
  // });
  // console.log('MAP', map);
  return (
    <div>
      <table class='ui celled striped table'>
        <thead>
          <tr>
            <th colspan='3'>{title}</th>
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
                <tr>
                  <td class='collapsing'>
                    <i class='folder icon'></i> {data[0]}
                  </td>

                  <td class='right aligned collapsing'>{data[1]}</td>
                </tr>
              );
            })}
          {/* <tr>
            <td class='collapsing'>
              <i class='folder icon'></i> something
            </td>
            <td>Initial commit</td>
            <td class='right aligned collapsing'>10 hours ago</td>
          </tr>
          <tr>
            <td>
              <i class='folder icon'></i> test
            </td>
            <td>Initial commit</td>
            <td class='right aligned'>10 hours ago</td>
          </tr>
          <tr>
            <td>
              <i class='folder icon'></i> build
            </td>
            <td>Initial commit</td>
            <td class='right aligned'>10 hours ago</td>
          </tr>
          <tr>
            <td>
              <i class='file outline icon'></i> package.json
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
