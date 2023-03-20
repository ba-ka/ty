import React from 'react'

const todayYear = new Date().getFullYear()

const Footer = () => (
    <div className="footer">
        <p className="copyright">&copy; { todayYear }</p>
    </div>
)

export default Footer
