import React from 'react'

const Footer = () => {
    return (
        <footer class='page-footer'>
            <p>&copy; {new Date().getFullYear()}<span>Simple Recipes</span>. Built with{" "} <a href='https://www.gatbsyjs.com/'>Gatsby</a> </p>
        </footer>
    )
}

export default Footer
