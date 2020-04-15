import React, { Component } from 'react'
import styled from 'styled-components'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import {completeAllTasks, deleteAllComplete, setFilter } from '../../Actions/ActionsCreators'
import {connect} from 'react-redux'
 
const SpanWrapper = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
`


class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <SpanWrapper>
        <Link href='' color="inherit" onClick={this.props.completeAllTasks}>
          {"Marcar como todas Completas"}
        </Link>
        <Button onClick={() => this.props.setFilter('todas')} variant="outlined" >
          Todas
        </Button>
        <Button onClick={() => this.props.setFilter('pendentes')} variant="outlined" >
          Pendentes
        </Button>
        <Button onClick={() => this.props.setFilter('completas')} variant="outlined" >
          Completas
        </Button>
        <div>
          <Button variant="contained"
            onClick={this.props.deleteAllComplete}
          >
            Remover Todas as Completas
        </Button>
        </div>
      </SpanWrapper>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    completeAllTasks: () => dispatch(completeAllTasks()),
    deleteAllComplete: () => dispatch(deleteAllComplete()),
    setFilter: (filter) => dispatch(setFilter(filter))
  }
}

export default connect(null, mapDispatchToProps)(BottomBar)