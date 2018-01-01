import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import QuestElement from '../questElement'
import technoList from '../../../assets/content/techno';
import {
  setSelectedAbility
} from '../../../modules/abilities';

const style = {
    border: '1px solid #626B77',
    margin: '5px',
    padding: '0',
    opacity: '0.8',
    backgroundColor: '#3A4756',
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

const getTechno = (techno) => {
    console.log(technoList);
    return technoList[techno] ? technoList[techno] : 'notfound';
}

const QuestSelected = props => {

    const navigateAndSetAbility = (ability) => {
        props.setSelectedAbility(technoList[ability]);
        props.navigateToAbilities('/abilities');
    }

    return (
        <div>
            <Grid divided="vertically" >
                <Grid.Row style={titleStyle}>
                    QUETE SELECTIONNE
                </Grid.Row>
            </Grid>
            <Grid style={style}>
                <Grid.Row >
                    <Grid.Column width={3} style={{ marginTop: '5px'}}>
                        <img src="/assets/astekg.png" />
                    </Grid.Column>
                    <Grid.Column width={13} floated='left' style={styleQuest}>
                        <Grid.Row>
                            <b>{ props.selectedQuest ? props.selectedQuest.title : 'Salam'}</b>
                        </Grid.Row>
                        <Grid.Row style={{fontSize: '21px'}}>
                            { props.selectedQuest ? props.selectedQuest.subtitle : 'Salam'}
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ fontSize: '18px', textAlign: 'justify'}}>
                        { props.selectedQuest ? props.selectedQuest.content : 'Salam'}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ fontSize: '18px', textAlign: 'justify'}}>
                        <ul>
                            {props.selectedQuest ? props.selectedQuest.taskList.map((task) => {
                                return (<li>{task}</li>);
                            }) : null }
                        </ul>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={12}>
                    {props.selectedQuest ? props.selectedQuest.techno.map((techno) => {
                        const tech = getTechno(techno);
                        console.log(tech);
                        return (
                        <Grid.Column width={3}>
                            <img src={tech.img} style={{ cursor: 'pointer'}} onClick={() => navigateAndSetAbility(techno)}/>
                        </Grid.Column>);
                    }) : null }
                </Grid.Row>
            </Grid>
        </div>
    )
}

const mapStateToProps = ({ quests }) => ({
    hoverQuest: quests.hoverQuest,
    selectedQuest: quests.selectedQuest
})

const mapDispatchToProps = dispatch => bindActionCreators({
    navigateToAbilities :() => push('/abilities'),
    setSelectedAbility,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(QuestSelected);
