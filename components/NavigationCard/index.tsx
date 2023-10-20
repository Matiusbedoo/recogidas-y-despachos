import Link from "next/link";

interface NavigationCardProps {
    title: string;
    description: string;
    href: string;
}

const NavigationCard = ({ title, description, href }: NavigationCardProps) => {
    return (
        <div>
            <Link href={href}>
                <h2>{title}</h2>
                <span>{description}</span>
            </Link>
        </div>
    )
}

export { NavigationCard }