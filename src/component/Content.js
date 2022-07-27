import {Component} from 'react';


class Content extends Component {

    showInfo(info) {
        alert("Informasi " + info)
    }

    render() {
        return (
            <div className = 'container-lg'>
                <table className = 'table table-striped mt-4'>
                    <thead>
                        <tr>
                            <th> No </th>
                            <th> Name </th>
                            <th> Address </th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> 1 </td>
                            <td> Doni </td>
                            <td> Ragunan </td>
                            <td> 
                                <button onClick={() => this.showInfo(1)}> 
                                    Detail 
                                </button> 
                            </td>
                        </tr>

                        <tr>
                            <td> 2 </td>
                            <td> Jution  </td>
                            <td> Ragunan </td>
                            <td> 
                                <button onClick={() => this.showInfo(2)}> 
                                    Detail 
                                </button> 
                            </td>
                        </tr>

                        <tr>
                            <td> 3 </td>
                            <td> Bang  </td>
                            <td> Ed </td>
                            <td> 
                                <button onClick={() => this.showInfo(3)}> 
                                    Detail 
                                </button>  
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}


export default Content