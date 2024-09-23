export default function Header({children}) {
  return (
    <header className='header'>
      <div className='slogan'>
        <img src="../../public/logo-white.svg" alt="Logo" />
        <h1>CVExpress</h1>
      </div>
      <div className='actions'>
        {children}
      </div>
    </header>
  )
}