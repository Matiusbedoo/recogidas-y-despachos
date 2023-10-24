import { Dialog } from "@/components/ui/Dialog"
import { Dispatch, SetStateAction } from "react"
import axios from 'axios'
import { API_ROUTES } from "@/Service/apiConfig"
import { toast } from "react-toastify"


interface DeleteUserDialogInterface {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    user: any
}

const DeletUserDialog = ({ open, setOpen, user }: DeleteUserDialogInterface) => {

    const deleteUser = async () => {
        try {
            await axios.request({
                method: 'DELETE',
                url: `${API_ROUTES.users}/${user.id}`
            }
            )
            toast.success("Eliminado Correctamente")
        } catch (error) {
            toast.error("Error eliminando usuario")      
        }
    }

    return (
        <Dialog open={open} onClose={() => {
            setOpen(false)
        }}
            title={`Eliminar Usuario${user.name}`}>
            <div className="flex flex-col items-center gap-6">
                <h3>¿Está seguro de querer eliminar el usuario?</h3>
                <h4>Esta acción no se puede revertir</h4>
                <div className="flex gap-3">
                    <button onClick={deleteUser} className="primary">Confirmar</button>
                    <button onClick={() => setOpen(false)} className="secondary">Cancelar</button>
                </div>
            </div>
        </Dialog>
    )
}

export { DeletUserDialog }