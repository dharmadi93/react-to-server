import React, {Component, PropTypes} from 'react'

class SearchData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name || ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
        this.props.showData(e.target.value)
    }

    handleSearch(e) {
        e.preventDefault()
        let name = this.state.name.trim()
        if (!name) {
            return
        }
        this.props.showData(name)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" placeholder="Search Name" className="form-control" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                </div>
                {/*<button type="button" onClick={this.handleSearch.bind(this)}>Search</button>*/}
            </form>
        )
    }
}

SearchData.propTypes = {
    name: PropTypes.string,
    showData: PropTypes.func.isRequired
}

export default SearchData