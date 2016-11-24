import React, {Component, PropTypes} from 'react'
import DataItem from './DataItem'

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchName: '',
            searchPhone: ''
        }
    }

    getSearchName(e) {
        this.setState({
            searchName: e.target.value
        })

    }

    getSearchPhone(e) {
        this.setState({
            searchPhone: e.target.value
        })

    }

    render() {

        const {data, actions} = this.props
        let dataFilter = data

        if (this.state.searchName) {
            dataFilter = data.filter((data) => {
                return data.name.toLowerCase().startsWith(this.state.searchName.toLowerCase())
            })
        }
        if (this.state.searchPhone) {
            dataFilter = data.filter((data) => {
                return data.phone.startsWith(this.state.searchPhone)
            })
        }
        if (this.state.searchName != '' && this.state.searchPhone != '') {
            dataFilter = data.filter((data) => {
                return (data.name.toLowerCase().startsWith(this.state.searchName.toLowerCase())) && (data.phone.startsWith(this.state.searchPhone))
            })
        }
        let dataNodes = dataFilter.map(function (item) {
            return(
                <DataItem key={item.id} data={item} {...actions} />
            //    deleteData={actions.deleteData} 3 kali
            )
        })
        return(
            <div>
                <form className="form-inline">
                    <input type="text" placeholder="Search Name" className="form-control" value={this.state.searchName} onChange={this.getSearchName.bind(this)} />
                    <input type="text" placeholder="Search Phone" className="form-control" value={this.state.searchPhone} onChange={this.getSearchPhone.bind(this)} />
                </form>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {dataNodes}
                    </tbody>
                </table>
            </div>
        )
    }
}

ListItem.propTypes = {
    data: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}