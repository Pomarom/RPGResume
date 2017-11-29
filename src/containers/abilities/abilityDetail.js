import React from 'react';
import { Grid } from 'semantic-ui-react'
import QuestElement from '../quest/questElement';

const AbilityDetail = ({data}) => {

    const style = {
        marginLeft: '30px',
    }

    const styleToDisplay = {
        height: '200px'
    }

    return (
        <Grid style={style}>
            <Grid.Row columns={2}>
                <Grid.Column width={4} >
                    <img src={data.img} style={{ width: '100%'}}/>
                </Grid.Column>
                <Grid.Column width={10} style={{textAlign: 'center'}}>
                    <Grid.Row>
                        <b style={{fontSize: '45px'}}>{data.title}</b>
                    </Grid.Row>
                    <Grid.Row style={{fontSize: '21px'}}>
                        {data.subtitle}
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ fontSize: '18px', textAlign: 'justify'}}>
                    {data.desc}
                </Grid.Column> 
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ fontSize: '21px'}}>
                    Related projects
                </Grid.Column> 
            </Grid.Row>
            <QuestElement data={{ title: 'Salam les frere', sub: 'Bonjour'}} />
            <QuestElement data={{ title: 'Salam les frere', sub: 'Bonjour'}} />
        </Grid>
    );
    
}

export default AbilityDetail
