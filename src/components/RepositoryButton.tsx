import { Link } from "react-router-dom";

interface RepositoryButtonProps {
    title: string
    slug: string
}

export function RepositoryButton(props: RepositoryButtonProps) {
    return (
        <div className="">
                <Link to={`/repositories/${props.slug}`}>
                    <h2 className="font-normal text-lg">
                        {props.title}
                    </h2>
                </Link>
        </div>
    )
}