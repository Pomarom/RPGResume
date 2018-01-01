import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import QuestElement from '../questElement'
import questList from '../../../assets/content/quest';

import {
    setHoverQuest,
    setSelectedQuest
} from '../../../modules/quests'

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
        return <QuestElement data={quest} handleClick={props.setSelectedQuest}/>
    })}
    </Grid>
</div>
)

const mapStateToProps = ({ quests }) => ({
    hoverQuest: quests.hoverQuest,
    selectedQuest: quests.selectedQuest
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setHoverQuest,
    setSelectedQuest
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestList)
