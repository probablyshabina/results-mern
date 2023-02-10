import React from 'react'
import AddPage from './Add'
import DeletePage from './Delete'
import UpdatePage from './Update'
import ViewPage from './View'
import {root} from '../main'

function Crud(props) {
    function addClickHandle(e) {
        const actionType = e.target.id
        const selectedRecord = props.Record
        const recordId = props.RecordId
        const isIdValid = recordId != "" && recordId != undefined

        root.render(
            <React.StrictMode>
                {
                actionType == "add" ? 
                    <AddPage/> : 
                actionType == "delete" && isIdValid ? 
                    <DeletePage RecordId={recordId} 
                        selectedRecord={selectedRecord}/> : 
                actionType == "update" && isIdValid ? 
                    <UpdatePage RecordId={recordId} 
                        selectedRecord={selectedRecord}/> :
                actionType == "view" && isIdValid ? 
                    <ViewPage RecordId={recordId} 
                        selectedRecord={selectedRecord}/> : 
                <div>
                    <h5>Please select a Record</h5>
                </div>
                }
            </React.StrictMode>,
        )
    }

    return (
        <div className='flex flex-full justify-center m-4'>
            <div className='flex flex-row justify-between align-middle w-3/5'>
                <button onClick={addClickHandle} id="add">Add</button>
                <button onClick={addClickHandle} id="update">Update</button>
                <button onClick={addClickHandle} id="delete">Delete</button>
                <button onClick={addClickHandle} id="view">View</button>
            </div>
        </div>
    )
}

export default Crud;