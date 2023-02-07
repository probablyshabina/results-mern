
import AddBtn from './Add'
import UpdateBtn from './Update'
import DeleteBtn from './Delete'
import ViewBtn from './View'

function Crud() {
    return (
        <div className='flex flex-full justify-center m-4'>
            <div className='flex flex-row justify-between align-middle w-3/5'>
                <AddBtn />
                <UpdateBtn />
                <DeleteBtn />
                <ViewBtn />
            </div>
        </div>
    )
}

export default Crud;