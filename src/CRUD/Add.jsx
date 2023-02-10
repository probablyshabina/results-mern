import { useState, useEffect, StrictMode } from 'react';
import { root } from '../main';
import API from '../api.js';

function AddBtn() {
    const [data, setData] = useState({
        party: 'ABC',
        votes: 456,
        percentage: 1.2,
        district: "Colombo",
        election: "2017Local"
    })

    function handleChange(e) {
        const newData = { ...data }
        if (e.target.id === 'party')
            newData[e.target.id] = e.target.value
        else if (e.target.id === 'votes') {
            newData[e.target.id] = e.target.value
        }
        else if (e.target.id === 'percentage') {
            newData[e.target.id] = e.target.value
        }
        setData(newData)
    }

    const AddBtnClickHandle = async () => {
        const newData = new FormData()
        newData.append('party', data.party)
        newData.append('votes', data.votes)
        newData.append('percentage', data.percentage)
        newData.append('district', data.district)
        newData.append('election', data.election)

        const addData = async () => {
            const add = await
                    API.post('/add', newData)
                        .then((req, res) => {
                            console.log("recived response")
                            
                            root.render(
                                <StrictMode>
                                    <h3>Doneee</h3>
                                </StrictMode>,
                            )
                            
                        })
                    .catch((err) => console.log(err.response.data))

            return add;
        }
        addData()
    }

    return (
        <div className='flex flex-row'>
            <div className='w-1/4'></div>
            <div className='flex flex-col justify-center items-center border-2 rounded-sm w-2/4 self-center p-4'>
                <div className='flex flex-row flex-grow justify-between items-center border rounded-md m-4 p-2'>
                    <label for="Party">Party Abbreviation</label>
                    <input
                        type="text"
                        placeholder='ABC'
                        id='party'
                        className='h-8 w-3/4 ml-2 p-1'
                        value={data.party}
                        onChange={handleChange} />
                </div>
                <div className='flex flex-row flex-grow justify-between items-center border rounded-md m-4 p-2'>
                    <label for="Votes">Votes</label>
                    <input
                        placeholder='123456'
                        type="text"
                        id='votes'
                        className='h-8 w-3/4 ml-2 p-1'
                        value={data.votes}
                        onChange={handleChange} />
                </div>
                <div className='flex flex-row flex-grow justify-between items-center border rounded-md m-4 p-2'>
                    <label for="Percentage">Percentage</label>
                    <input
                        type="text"
                        placeholder='1.00'
                        id='percentage'
                        className='h-8 w-3/4 ml-2 p-1'
                        value={data.percentage}
                        onChange={handleChange} />
                </div>

                <button className='text-lg w-xl' onClick={AddBtnClickHandle}>Add Result</button>
            </div>
            <div className='w-1/4'></div>
        </div>
    )
}


export default AddBtn;