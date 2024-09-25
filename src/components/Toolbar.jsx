export default function Toolbar({children}) {
  return (
    <div className='toolbar'>
      <nav className='actions'>
        {children}
      </nav>
    </div>
  )
}