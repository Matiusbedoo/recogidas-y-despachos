import { NavigationCard } from "@/components/ui/NavigationCard";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center gap-4">
      <h1>Sistemas de recogidas y despachos</h1>
      <div className="flex gap-4">
        <NavigationCard
          title="Lotes"
          description="Gestionar los lotes de la finca"
          href='/lotes' />

        <NavigationCard
          title="Recogidas"
          description="Crear y visualizar recogidas de la finca"
          href="/recogidas" />

        <NavigationCard
          title="Envios"
          description="Envios"
          href="/envios" />

        <NavigationCard
          title="Usuarios"
          description="Gestionar los Usuarios"
          href='/users' />
      </div>
    </main>
  )
}
