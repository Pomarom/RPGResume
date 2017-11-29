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
  'html': {
    img: 'assets/html.png',
    title: 'HTML5/CSS3',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'electron': {
    img: 'assets/electron.png',
    title: 'Electron',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'C': {
    img: 'assets/C.png',
    title: 'C',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'ionic': {
    img: 'assets/ionic.png',
    title: 'Ionic',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'C++': {
    img: 'assets/C++.png',
    title: 'C++',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'java': {
    img: 'assets/java.png',
    title: 'Java',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'java-android': {
    img: 'assets/java-android.png',
    title: 'Java Android',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'js': {
    img: 'assets/js.png',
    title: 'JS',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'react': {
    img: 'assets/react.png',
    title: 'React',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'redux': {
    img: 'assets/redux.png',
    title: 'Redux',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'angularjs': {
    img: 'assets/angular.png',
    title: 'AngularJS',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'angular2': {
    img: 'assets/angular.png',
    title: 'Angular2',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'ionic2': {
    img: 'assets/ionic2.png',
    title: 'Ionic2',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'prepa': {
    img: 'assets/math.png',
    title: 'CPGE MPSI/MP',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  },
  'isima': {
    img: 'assets/logoisi.png',
    title: 'ISIMA',
    subtitle: 'Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
  }
}
const graph = {
  nodes: [
      {id: 'traps', level: 1},
      {id: 'html', level: 2, shape:'circularImage', image: 'assets/html.png'},
      {id: 'electron', level: 3, shape:'circularImage', image: 'assets/electron.png'},
      {id: 'C', level: 2, shape:'circularImage', image: 'assets/C.png'},
      {id: 'ionic', level: 4, shape:'circularImage', image: 'assets/ionic.png'},
      {id: 'C++', level: 3, shape:'circularImage', image: 'assets/C++.png'},
      {id: 'java', level: 4, shape:'circularImage', image: 'assets/java.png'},
      {id: 'java-android', level: 5, shape:'circularImage', image: 'assets/java-android.png'},
      {id: 'js', level: 3, shape:'circularImage', image: 'assets/js.png'},
      {id: 'react', level: 4, shape:'circularImage', image: 'assets/react.png'},
      {id: 'redux', level: 6, shape:'circularImage', image: 'assets/redux.png'},
      {id: 'angularjs', level: 4, shape:'circularImage', image: 'assets/angular.png'},
      {id: 'angular2', shape:'circularImage', image: 'assets/angular.png', level: 5},
      {id: 'ionic2', level: 5, shape:'circularImage', image: 'assets/ionic2.png'},
      {id: 'prepa', level: 2, shape:'circularImage', image: 'assets/math.png'},
      {id: 'isima', level: 3, shape:'circularImage', image: 'assets/logoisi.png'},
    ],
  edges: [
      {from: 'traps', to: 'html'},
      {from: 'traps', to: 'C'},
      {from: 'traps', to: 'prepa'},
      {from: 'C', to: 'C++'},
      {from: 'C++', to: 'java'},
      {from: 'java', to: 'java-android'}, 
      {from: 'prepa', to: 'isima'},
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
        color: "#000000"
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
