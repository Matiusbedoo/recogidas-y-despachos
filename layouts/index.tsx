import { NavBar } from "@/components/ui/navBar"
import { ToastContainer } from 'react-toastify'
import 'react-toasty/dist/ReactToastify.css'


interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <main>
            <NavBar/>
            {children}
            <ToastContainer/>
        </main>
    )
}

export  {Layout}