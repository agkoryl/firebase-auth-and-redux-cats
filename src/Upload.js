import React from 'react';
import {storage} from './firebase';

class Upload extends React.Component {

    state = {
        file: null
    }

    handleChange = event => {
        this.setState({
            file: event.target.files[0]
        });
    }

    handleSubmit = (event) => {
        if (this.state.file !== null) {
            const ref = storage.ref().child(`images/${this.state.file.name}`);
            ref.put(this.state.file).then(snapshot => {
                console.log("ble");
              });
        }
        event.preventDefault();
    }


    render() {
        return (
            <div className="register-container">
                <h2>Upload file</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="file" onChange={this.handleChange} name="files" style={{ margin: 5, fontSize: 20 }}></input>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <input type="submit" value="UPLOAD" style={{ margin: 5, backgroundColor: "#357266", width: "100px", height: "40px", color: "white", textAlign: "center", border: "none", fontSize: "20px" }} />
                    </div>
                </form>
            </div>

        )
    }
}

export default Upload;