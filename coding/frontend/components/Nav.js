import React from 'react'
import Link from 'next/link';


const Nav = () => {
  return (
    <div>
      <Link
        href = "/sell"
      >
        <a>Shell</a>
      </Link>
      <Link
        href = "/"
      >
        <a>Home</a>
      </Link>
    </div>
  )
}

export default Nav
