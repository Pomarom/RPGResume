import React from 'react'
import { Grid } from 'semantic-ui-react'

const Gear = () => (
  <Grid divided="vertically" >
    <Grid.Row columns={3} centered={true}>
        <Grid.Column width={4} textAlign='center'>
            oklm
        </Grid.Column>
        <Grid.Column width={3} textAlign='center'>
            <img src="/assets/Traps.png" style={{width:'80%'}}/>
        </Grid.Column>
        <Grid.Column width={4} textAlign='center'>
            oklm
        </Grid.Column>
    </Grid.Row>
    </Grid>
)

export default Gear
