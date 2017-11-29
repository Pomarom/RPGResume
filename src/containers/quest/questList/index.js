import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import QuestElement from '../questElement'

const quest = {
    title: 'Application mobile',
    sub: 'Lead developpeur'
}
const questList = [];

for (let i = 0; i < 10; i += 1 ) {
    console.log('salam');
    questList.push(quest);
}
const style = {
    fontSize: '17px',
}

const styleGrid = {
    maxHeight: '500px',
    overflowY: 'scroll'

}
const QuestList = props => (
<div>
    <Grid divided="vertically" >
        <Grid.Row style={style}>
            ({questList.length}) TOUTES LES QUETES
        </Grid.Row>
    </Grid>
    <Grid divided="vertically" style={styleGrid} >
    {questList.map((quest) => {
        return <QuestElement data={quest}/>
    })}
    </Grid>
</div>
)

export default QuestList;
