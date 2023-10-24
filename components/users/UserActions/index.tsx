import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md'
import { Tooltip } from '../../ui/Tooltip'
import { useState } from 'react'
import { DeletUserDialog } from '@/components/users/DeleteUserDialog'

interface UserActionsProps {
    user: any
}

const UserActions = ({user}: UserActionsProps) => {

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

    return (
        <div className='text-3xl flex gap-2'>
            <Tooltip description='Editar el Usuario'>
                <MdModeEditOutline className="text-gray-900 hover:text-yellow-600 hover:cursor-pointer" />
            </Tooltip>

            <Tooltip description='Eliminar el Usuario'>
                <button type='button' onClick={()=> setOpenDeleteDialog(true)}>
                    <MdDeleteOutline className="text-gray-900 hover:text-red-600 hover:cursor-pointer" />
                </button>
            </Tooltip>
            <DeletUserDialog open={openDeleteDialog} setOpen={setOpenDeleteDialog} user={user} />
        </div>
    )
}

export { UserActions }