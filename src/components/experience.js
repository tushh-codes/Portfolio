import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export class Experience extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} {this.props.endYear}
            <h6>Was waiting for you to hire me :)</h6>
            <h6>(Seeking For Opportunities)</h6>
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <p>{this.props.jobDesc}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
