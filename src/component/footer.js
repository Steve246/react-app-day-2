import {Component} from "react";


class Footer extends Component {
    render() {
        return(
            <div>
                <footer className = "text-center p-2 bg-dark">
                    <span className = 'text-white'>
                        enigmaCamp 2022 
                        <a className = 'text-white text-decoration-none ms-1' href = "https://enigmacamp.com">
                            Enigma camp
                        </a>

                    </span>
                </footer>
            </div>
        )
    }

}


export default Footer