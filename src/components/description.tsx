type Props = {
    description: string;
}

export default function Description({ description }: Props) {
    return (
        <div className="pt-2 pb-4 text-center">
            <p>{description}</p>
        </div>
    )
}