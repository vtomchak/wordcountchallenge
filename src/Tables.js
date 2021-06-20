import React from 'react';

class Tables extends React.Component {
  render() {
    return (
      <div>
        <table class='ui celled striped table'>
          <thead>
            <tr>
              <th colspan='3'>Git Repository</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='collapsing'>
                <i class='folder icon'></i> node_modules
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
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tables;
