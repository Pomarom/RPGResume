import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

const style = {
    border: '1px solid #626B77',
    margin: '5px',
    padding: '0',
    opacity: '0.8'
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

const options = {
    followCursor:true,
    shiftX: 0,
    shiftY: 0
  }

const QuestElement = props => {
    const handleClick = () => {
        props.handleClick(props.data);
    }

    return (
        <Grid.Row columns={3} style={style} className="questElement" onClick={handleClick}>
            <Grid.Column width={4} style={styleColumn}>
                <img src={props.data.img} style={{ height: '50px'}}/>
            </Grid.Column>
            <Grid.Column width={10} floated='left' style={styleQuest}>
                <Grid.Row>
                    <b>{props.data.title}</b>
                </Grid.Row>
                <Grid.Row style={{fontSize: '21px'}}>
                    {props.data.subtitle}
                </Grid.Row>
            </Grid.Column>
        </Grid.Row>
    )
}
export default QuestElement;