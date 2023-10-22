import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md'

const UserActions = () => {
    return (
        <div className='text-3xl flex gap-2'>
            <MdModeEditOutline className = "text-gray-900 hover:text-yellow-600 hover:cursor-pointer" />
            <MdDeleteOutline className = "text-gray-900 hover:text-red-600 hover:cursor-pointer" />
        </div>
    )
}

export { UserActions }