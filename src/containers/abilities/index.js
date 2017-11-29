import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import AbilityDetail from './abilityDetail';
import Graph from 'react-graph-vis'
import {
  setHoverAbility,
  setSelectedAbility
} from '../../modules/abilities'

const styleCol = {
  height: '700px'
}
const graphMap = {
  'traps': {
    img: 'assets/htmlg.png',
    title: 'TRAPS',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'html': {
    img: 'assets/htmlg.png',
    title: 'HTML5/CSS3',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'electron': {
    img: 'assets/electrong.png',
    title: 'Electron',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'C': {
    img: 'assets/Cg.png',
    title: 'C',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'ionic': {
    img: 'assets/ionicg.png',
    title: 'Ionic',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'C++': {
    img: 'assets/C++g.png',
    title: 'C++',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'java': {
    img: 'assets/javag.png',
    title: 'Java',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'java-android': {
    img: 'assets/androidg.png',
    title: 'Java Android',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'js': {
    img: 'assets/jsg.png',
    title: 'JS',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'react': {
    img: 'assets/reactg.png',
    title: 'React',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'redux': {
    img: 'assets/reduxg.png',
    title: 'Redux',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'angularjs': {
    img: 'assets/angularg.png',
    title: 'AngularJS',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'angular2': {
    img: 'assets/angular2g.png',
    title: 'Angular',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'ionic2': {
    img: 'assets/ionic2g.png',
    title: 'Ionic2',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  }
}
const graph = {
  nodes: [
      {id: 'traps', level: 1, shape:'image', image: 'assets/htmlg.png'},
      {id: 'html', level: 2, shape:'image', image: 'assets/htmlg.png'},
      {id: 'electron', level: 3, shape:'image', image: 'assets/electrong.png'},
      {id: 'C', level: 2, shape:'image', image: 'assets/Cg.png'},
      {id: 'ionic', level: 4, shape:'image', image: 'assets/ionicg.png'},
      {id: 'C++', level: 3, shape:'image', image: 'assets/C++g.png'},
      {id: 'java', level: 4, shape:'image', image: 'assets/javag.png'},
      {id: 'java-android', level: 5, shape:'image', image: 'assets/androidg.png'},
      {id: 'js', level: 3, shape:'image', image: 'assets/jsg.png'},
      {id: 'react', level: 4, shape:'image', image: 'assets/reactg.png'},
      {id: 'redux', level: 6, shape:'image', image: 'assets/reduxg.png'},
      {id: 'angularjs', level: 4, shape:'image', image: 'assets/angularg.png'},
      {id: 'angular2', shape:'image', image: 'assets/angular2g.png', level: 5},
      {id: 'ionic2', level: 5, shape:'image', image: 'assets/ionic2g.png'},
    ],
  edges: [
      {from: 'traps', to: 'html'},
      {from: 'traps', to: 'C'},
      {from: 'C', to: 'C++'},
      {from: 'C++', to: 'java'},
      {from: 'java', to: 'java-android'},
      {from: 'html', to: 'electron'},
      {from: 'html', to: 'js'},
      {from: 'react', to: 'redux'},
      {from: 'js', to: 'angularjs'},
      {from: 'angularjs', to: 'angular2'},
      {from: 'js', to: 'react'}, 
      {from: 'angularjs', to: 'ionic'},
      {from: 'angular2', to: 'ionic2'},
    ],
  
};

const options = {
    layout: {
        hierarchical: true
    },
    edges: {
        color: {
          color: '#808080',
          hover: '#CCAA00'
        },
        width: 2
    },
    manipulation: {
      enabled: false,
    },
    interaction: {
      dragView: false,
      dragNodes: false,
      zoomView: false,
      hover: true
    }
};

const Abilities = (props) => {
  console.log(props);
  const events = {
    hoverNode: (test) => {
      props.setHoverAbility(graphMap[test.node]);
      console.log(test.node);
    },
    blurNode: () => {
      props.setHoverAbility(null)
    },
    selectNode: (test) => {
      console.log(test)
      props.setSelectedAbility(graphMap[test.nodes[0]])
    }
  }
  const detail = props.hoverAbility !== null ? props.hoverAbility : props.selectedAbility;
  return (
  <Grid divided="vertically" >
    <Grid.Row columns={2} centered={true}>
      <Grid.Column style={styleCol}>
        { detail === null ? (
          <Grid.Row centered={true} style={{ fontSize: '50px', textAlign: 'center'}} >
            Skill tree
          </Grid.Row>
          ) : <AbilityDetail data={detail} /> }
      </Grid.Column>
      <Grid.Column style={styleCol}>
        <Graph graph={graph} options={options} events={events} /> 
      </Grid.Column> 
    </Grid.Row>
  </Grid>
  );
}

const mapStateToProps = ({ abilities }) => ({
  hoverAbility: abilities.hoverAbility,
  selectedAbility: abilities.selectedAbility
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setHoverAbility,
  setSelectedAbility
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Abilities)
