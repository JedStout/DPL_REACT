import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Container, Segment, Grid, Item, Header, Divider, Icon } from 'semantic-ui-react';


class Footer extends Component {


  render() {
    return (
        <Segment basic>
            <Segment basic textAlign='center'>
                This is the footer. &#169; 2017 
            </Segment>
        </Segment>
    )
  }
}

export default withRouter(Footer);
