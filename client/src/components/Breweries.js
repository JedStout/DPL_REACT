import React, { Component } from 'react';
import { Container, Segment, Grid, Item, Header, Divider, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Breweries extends React.Component {
    constructor() {
        super();
        this.state = {
          breweries: [],
        }
    }
  componentDidMount() {
    axios
    .get("http://api.brewerydb.com/v2/breweries?key=4a67a4e833fd9ccbd77588fbaa724c33")
        .then((Response) =>  Response.json())
        .then((findresponse) => {
        console.log(findresponse.breweries),
        this.setState({breweries: findresponse.breweries}) 
    })
};
  render() {
    return(
    <Container>
        <Segment>
            <clear/>
        {this.state.breweries.map( b =>
            <Item> key={b.id}>
                <Link to={`breweries/${b.id}`}>
                    {b.name}
                    {' '}
                </Link>
            </Item>
        )}
        </Segment>
      This should display All Breweries...
    </Container>
    )
    }
}

export default Breweries;
