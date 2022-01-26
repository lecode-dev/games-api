import {ReactComponent as FacebookIcon} from "../assets/icons/facebook.svg"
import {ReactComponent as InstagramIcon} from "../assets/icons/instagram.svg"
import {ReactComponent as TwitterIcon} from "../assets/icons/twitter.svg"
import {ReactComponent as GitHubIcon} from "../assets/icons/github.svg"

const navigation = [
    {
        name: 'Facebook',
        href: '#',
        icon: (props:any) => (
            <FacebookIcon {...props}/>
        ),
    },
    {
        name: 'Instagram',
        href: '#',
        icon: (props:any) => (
            <InstagramIcon {...props}/>
        ),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (props:any) => (
            <TwitterIcon {...props}/>
        ),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: (props:any) => (
            <GitHubIcon {...props}/>
        ),
    },
]

export default function Footer() {
    return (
        <footer className="bg-purple">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-white hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-white">&copy; 2022 The Game Database, LeCode. All rights reserved.</p>
            </div>
        </div>
        </footer>
    )
}
