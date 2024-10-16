import { Download, Eraser, Eye, ChartNoAxesGantt } from 'lucide-react';

export default function Header({onClear, onPreview, onDownload}) {
  const styles = {
    size: '28px'
  }

  return (
    <header className='header'>
      <div className='logo'>
        <ChartNoAxesGantt 
          size={'32px'}
          strokeWidth={3}
        />
        <h1>CVExpress</h1>
      </div>
      <nav className="nav">
        <button className='nav-button' onClick={() => onClear()}>
          <Eraser size={styles.size}/>
          <span>Clear</span>
        </button>
        <button className='nav-button view-pdf' onClick={() => onPreview()}>
          <Eye size={styles.size}/>
        </button>
        <button className='nav-button' onClick={() => onDownload()}>
          <Download size={styles.size}/>
          <span>Download</span>
        </button>
      </nav>
    </header>
  )
}