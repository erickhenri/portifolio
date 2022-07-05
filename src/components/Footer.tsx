import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <ul className="py-4 bg-gray-400 border-t border-blue-900 border-opacity-50 flex w-full justify-evenly">
            <li>
                <InstagramLogo size={32} weight="fill"/>
            </li>
            <li>
                <GithubLogo size={32} weight="fill"/>
            </li>
            <li>
                <LinkedinLogo size={32} weight="fill" />
            </li>
        </ul>
    )
}