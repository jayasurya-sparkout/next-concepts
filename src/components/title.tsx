type Props = {
    title: string;
}

export default function Title({ title }: Props) {
    return (
        <div className="pt-4 text-center titlteWrapper">
            <h1 className="text-5xl font-bold">{title}</h1>
        </div>
    )
}