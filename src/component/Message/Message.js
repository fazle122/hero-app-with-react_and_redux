import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
// import  './Message.css';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
        this.clear = this.clear.bind(this);
        this.add = this.add.bind(this);
    }

    add(m) {
        this.setState({ message: m })
    }

    clear() {
        this.setState({ message: [] })
    }
    render() {
        return (
            <div>
                <h2>Messages</h2>
                <div>
                    {/* <ul>
                        {this.props.messages.map((message, index) =>
                            <li key={index} style={{listStyleType: "none" }}>
                                {message}
                            </li>
                        )}
                    </ul> */}

                   {this.props.messages}
                </div>
                <button className="clear" onClick={this.clear}>clear</button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.messageReducer
    }

}

export default connect(mapStateToProps)(Messages);