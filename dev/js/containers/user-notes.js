import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNotes } from '../actions/index';

class UserNotes extends Component {

  constructor(props) {
    super(props);

    this.state = { note: '' };
    this.onAddNote = this.onAddNote.bind(this);
  }

  listUserNotes() {

    if(!this.props.userNotes) {
      return false
    }

    return this.props.userNotes.map((note, index) => {
      return <li key={index} className='list-group-item'>{ note }</li>
    });
  }

  onAddNote(event) {
    event.preventDefault();

    this.props.addNotes(this.state.note);
    this.setState({ note: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onAddNote }>
          <div className='input-group'>
            <input
              value={this.state.note}
              onChange={event => this.setState({ note: event.target.value })}
              className='form-control' placeholder='Add notes...'/>
            <span className='input-group-btn'>
              <button className='btn btn-secondary'>Add Note</button>
            </span>
          </div>
        </form>

        <ul className='list-group'>
          { this.listUserNotes() }
        </ul>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addNotes
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    userNotes: state.userNotes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNotes);
