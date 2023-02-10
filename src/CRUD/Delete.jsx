import { useEffect } from 'react';
import API from '../api.js';
import axios from 'axios';

function DeleteBtn(props) {
    useEffect(
        () => {
            axios.delete('http://localhost:5000/api/v1/results/:id', 
                    { data : {_id : props.selectedRecord[0]._id} })
                .then((req, res) => {
                    console.log("deleted")
                    root.render(
                        <StrictMode>
                            <h3>Doneee</h3>
                        </StrictMode>,
                    )
                    })
                .catch((err) => console.log(err))
        }
        , [])
}

export default DeleteBtn;