export default function Card({children}:{children:React.ReactNode}) {
    return (
    <div className="bg-card text-card-foreground p-4 container flex justify-center">
        {children}
    </div>
    )
}
