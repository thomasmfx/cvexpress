import { Download, Eraser, Eye } from 'lucide-react';

export default function Header({onClear}) {
  const styles = {
    size: '28px'
  }

  return (
    <header className='header'>
      <div className='logo'>
        <img src="../../public/logo-white.svg" alt="Logo" />
        <h1>CVExpress</h1>
      </div>
      <nav className="nav">
        <button className='nav-button' onClick={() => onClear()}>
          <Eraser size={styles.size}/>
          <span>Clear</span>
        </button>
        <button className='nav-button view-pdf'>
          <Eye size={styles.size}/>
        </button>
        <button className='nav-button'>
          <Download size={styles.size}/>
          <span>Download</span>
        </button>
      </nav>
    </header>
  )
}