// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Modal, Statistic, Divider, Form } from 'semantic-ui-react';

// user files
import { sendGroupInviteEmail } from '../actions/sendGroupInviteEmail';

class EmailModal extends Component {
  constructor(props){
    super(props)

    this.state = {
      email_message: `Dear Friend, \n
        Please join our sick group at:
        http://localhost:3001/groups/1`
    }
  }

  handleEmailSubmit = () => {
    const userID = this.props.currentUser.id.toString()
    debugger
    this.props.sendGroupInviteEmail(userID, this.state.email_message)
    alert('Your Email Has Been Submitted!')
  }

  render(){
    return(
      <Modal trigger={<Button width='1000px' size='huge' color='red'>Invite Friend To Group</Button>} closeIcon>
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
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps, { sendGroupInviteEmail })(EmailModal)
