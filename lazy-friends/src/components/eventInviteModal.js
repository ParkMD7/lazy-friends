// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal, Statistic, Divider, Form } from 'semantic-ui-react';

// user files
import { sendEventInviteToGroup } from '../actions/sendEventInviteToGroup';

class EventInviteModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      email_message: `Dear Friend, \n
        Our sweet group just made an event and you are invited!: \n
        Follow the link to:
        http://localhost:3001/`
    }
  }

  handleEmailSubmit = () => {
    const groupID = this.props.currentUser.currentGroup.id.toString()
    debugger
    this.props.sendEventInviteToGroup(groupID, this.state.email_message)
    alert('Your Email Has Been Submitted!')
  }

  render(){
    return(
      <Modal trigger={<Button width='1000px' size='huge' color='red'>Create An Event Here</Button>} closeIcon>
        <Header icon='mail' content='Remind Your Local Rep That Climate Change Is An Important Issue to You' />
        <Modal.Content>
          <Form size="small" key="small" >
            <Form.TextArea name="summary" value={this.state.email_message} style={{height: '450px'}} disabled/>
            <Button centered inverted as={ Link } name='sendEmail' to='/' color='green' type='submit' onClick={this.handleEmailSubmit} >
              <Icon name='checkmark' color='green' size='large' />
              Send Email
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { sendEventInviteToGroup })(EventInviteModal)
