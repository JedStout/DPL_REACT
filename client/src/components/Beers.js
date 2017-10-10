import React, { Component } from 'react';
import { Container, Segment, Grid, Item, Header, Divider, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends Component {
    constructor() {
        super();
        this.state = {
          beers: [],
        }
    }
  componentDidMount() {
    axios
    .get("http://api.brewerydb.com/v2/beers?key=4a67a4e833fd9ccbd77588fbaa724c33")
        .then((Response) =>  Response.json())
        .then((findresponse) => {
        console.log(findresponse.beers),
        this.setState({beers: findresponse.beers}) 
    })
};
  render() {
    return(
    <Container>
        <Segment>
            <clear/>
        {this.state.beers.map( b =>
            <Item> key={b.id}>
                <Link to={`beers/${b.id}`}>
                    {b.name}
                    {' '}
                </Link>
            </Item>
        )}
        </Segment>
      This should display All Beers...
    </Container>
    )
    }
}

export default Beers;
