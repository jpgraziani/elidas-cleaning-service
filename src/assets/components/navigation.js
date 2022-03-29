import React from 'react'
import { Link } from 'gatsby';
export default function Navigation() {
  return (
    <nav id='navbar' className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        <li><Link to='/about'>about</Link></li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </nav>
  );
}