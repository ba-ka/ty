import Link from 'next/link'
import React from 'react'

const todayYear = new Date().getFullYear()

const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link href="/" as={`/`}>
                    home
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    blog
                </Link>
            </li>
            <li>
                <Link href="/project">
                    project
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    contact
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu
