import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import QuestElement from '../questElement'

const style = {
    border: '1px solid #626B77',
    margin: '5px',
    padding: '0',
    opacity: '0.8',
    backgroundColor: '#3A4756',
    height: '500px'
}

const styleColumn = {
    margin: '5px',
    width: '70%',
}

const styleQuest = {
    textAlign: 'left',
    fontSize: '24px',
    margin: '0',
}

const titleStyle = {
    fontSize: '17px',
}

const QuestSelected = props => (
  <Grid divided="vertically" >
    <Grid.Row style={titleStyle}>
        QUETE SELECTIONNE
    </Grid.Row>
    <Grid.Row style={style}>
        <Grid.Column width={3} style={{ marginTop: '5px'}}>
            <img src="/assets/astekg.png" />
        </Grid.Column>
        <Grid.Column width={13} floated='left' style={styleQuest}>
            <Grid.Row>
                <b>Title</b>
            </Grid.Row>
            <Grid.Row style={{fontSize: '21px'}}>
                Subtitle
            </Grid.Row>
        </Grid.Column>
        <Grid.Row>
            Salam
        </Grid.Row>
    </Grid.Row>
  </Grid>
)

export default QuestSelected;
