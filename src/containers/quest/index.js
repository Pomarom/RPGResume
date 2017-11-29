import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import QuestList from './questList';
import QuestSelected from './questSelected';

const style = {
    fontSize: '30px',
}
const Quest = props => (
  <Grid divided="vertically" >
    <Grid.Row columns={3} centered={true}>
        <Grid.Column width={5} textAlign='center'>
            <QuestList/>
        </Grid.Column>
        <Grid.Column width={3} textAlign='center'>
            <img src="/assets/Traps.png" style={{width:'80%'}}/>
        </Grid.Column>
        <Grid.Column width={5} textAlign='center'>
            <QuestSelected/>
        </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1} centered={true}>
        <Grid.Column width={3} textAlign='center' style={style}>
            Web Developer
        </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3} centered={true}>
        <Grid.Column width={4} textAlign='center' >
            <Grid.Row>
                Location
            </Grid.Row>
            <Grid.Row>
                Toulouse, FR
            </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center' >
            <Grid.Row>
                Age
            </Grid.Row>
            <Grid.Row>
                {Math.abs(new Date(Date.now() - 737805600000).getUTCFullYear() - 1970)}
            </Grid.Row>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center' >
            <Grid.Row>
                Contact
            </Grid.Row>
            <Grid.Row>
                paul.gaucher.pro@gmail.com
            </Grid.Row>
        </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Quest;
