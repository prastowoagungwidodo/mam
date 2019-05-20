import React, { Component } from 'react';
import { connect } from 'react-redux';
import DetailView from './DetailView';

class DetailContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipe: this.props.navigation.state.params.recipe
        };
    }
    
    render() {
        return <DetailView {...this.props} recipe={this.state.recipe}/>;
    }
}

const mapStateToProps = state => ({
    ...state.root
});


export default connect(mapStateToProps)(DetailContainer);
