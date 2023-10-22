import { NavBar } from "@/components/ui/navBar"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <main>
            <NavBar/>
            {children}
        </main>
    )
}

export  {Layout}