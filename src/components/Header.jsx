import { Download, ChartNoAxesGantt, Languages } from 'lucide-react';

export default function Header({language, onToggleLanguage, onDownload}) {
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
        <button className='nav-button' onClick={() => onToggleLanguage()}>
          <Languages size={styles.size}/>
            {language === 'en'
              ? (
                <span>EN-US</span>
              )
              : (
                <span>PT-BR</span>
              )
            }
        </button>
        <button className='nav-button' onClick={() => onDownload()}>
          <Download size={styles.size}/>
          <span>Download</span>
        </button>
      </nav>
    </header>
  )
}