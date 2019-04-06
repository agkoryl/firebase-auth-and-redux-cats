import React, { Component } from 'react';
import { connect } from 'react-redux';


import './CatGrid.css';
import { fetchCats } from '../actions';

class CatGrid extends Component {


    componentDidMount() {
        this.props.fetchCats();
    }

    render() {
        return (
            <div className="table-container">
                <table className="greyGridTable">
                    <tbody>
                        {this.props.cats.map(cat => (
                            <tr key={cat.id}>
                                <td style={{ fontSize: 20 }}>{cat.name}</td>
                                <td><img src={cat.url} style={{ width: "200px", height: "150px", overflow: "hidden" }}></img></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cats: state.cats.list
});

const mapDispatchToProps = dispatch => ({
    fetchCats: () => dispatch(fetchCats()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CatGrid);

