import React from 'react';
import { Route, Link } from 'react-router-dom'
import Quest from '../quest'
import Abilities from '../abilities'
import Gear from '../gear'
import { Grid } from 'semantic-ui-react'

const style = {
  height: '10vh',
  backgroundColor:'#dddddd',
  opacity: '0.8'
}

const styleBody = {
  marginTop: '20px'
}
const items = {
  fontSize: '27px',
}
const App = () => (
  <div>
    <Grid divided="vertically" style={style}>
      <Grid.Row columns={2} centered={true}>
        <Grid.Column width={2} textAlign='center'>
          <Link to="/quest" style={items}>Quests</Link>
        </Grid.Column>
        <Grid.Column width={2} textAlign='center'>
          <Link to="/" style={items}>Gear</Link>
        </Grid.Column>
        <Grid.Column width={2} textAlign='center'>
          <Link to="/abilities" style={items}>Abilities</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <main style={styleBody}>
      <Route exact path="/" component={Gear} />
      <Route exact path="/abilities" component={Abilities} />
      <Route exact path="/quest" component={Quest} />
    </main>
  </div>
)

export default App
