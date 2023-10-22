import { API_ROUTES, fetcher } from "@/Service/apiConfig"
import { NavBar } from "@/components/ui/navBar"
import { UserActions } from "@/components/users"
import { Layout } from "@/layouts"
import Image from "next/image"
import Link from "next/link"
import useSWR from "swr"

const UsersPage = () => {

    const { data, isLoading, error } = useSWR(API_ROUTES.users, fetcher)

    console.log(data, isLoading, error)

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error al Cargar</div>

    return (

        <div className="flex flex-col w-full items-center gap-3 p-1">
            <h1>Gestión de Usuarios</h1>
            <section className="flex justify-center">
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.users.map((users) => {
                            return (
                                <tr key={users.id}>
                                    <td>
                                        <Image
                                            height={40}
                                            width={40}
                                            src="https://s.gravatar.com/avatar/f04bb6129f53bef63dd289da7868259b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fds.png"
                                            alt="User Image"
                                            className="rounded-full"
                                        />
                                    </td>

                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td><UserActions/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>

        </div>

    )
}

export default UsersPage 