export default function Header() {
import { Menu, Download, Eraser } from 'lucide-react';
import { useState } from "react";
export default function Header({onClear}) {
  return (
    <header className='header'>
      <div className='slogan'>
        <img src="../../public/logo-white.svg" alt="Logo" />
        <h1>CVExpress</h1>
      </div>
      <div className="actions">
        <button className='action-button' onClick={() => onClear()}>
          <Eraser/>
          Clear
        </button>
        <button className='action-button'>
          <Download/>
          Download
        </button>
      </div>
    </header>
  )
}