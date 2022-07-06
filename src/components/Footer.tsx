import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
    return (
        <ul className="md:absolute md:left-24 md:bottom-16 py-4 bg-gray-400 dark:bg-blue-900 dark:bg-opacity-50 md:bg-transparent md:dark:bg-transparent border-t border-blue-900 border-opacity-10 dark:border-white dark:border-opacity-10 md:border-none flex w-full md:w-auto justify-evenly md:justify-center md:gap-5">
            <li className="md:opacity-50 md:hover:opacity-100 transition-opacity cursor-pointer">
                <InstagramLogo size={32} weight="fill"/>
            </li>
            <li className="md:opacity-50 md:hover:opacity-100 transition-opacity cursor-pointer">
                <GithubLogo size={32} weight="fill"/>
            </li>
            <li className="md:opacity-50 md:hover:opacity-100 transition-opacity cursor-pointer">
                <LinkedinLogo size={32} weight="fill" />
            </li>
        </ul>
    )
}