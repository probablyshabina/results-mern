import React from 'react'
import AddPage from './Add'
import DeletePage from './Delete'
import UpdatePage from './Update'
import ViewPage from './View'
import {root} from '../main'

function Crud(props) {
    function addClickHandle(e) {
        const id = e.target.id

        root.render(
            <React.StrictMode>
                {
                id == "add" ? <AddPage/> : 
                id == "delete" ? <DeletePage RecordId={props.RecordId}/> : 
                id == "update" ? <UpdatePage RecordId={props.RecordId}/> :
                id == "view" ? <ViewPage RecordId={props.RecordId}/> : null
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