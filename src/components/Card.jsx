export default function Card({classes, children, onClick}) {
  return (
    <li className={'card ' + [...classes]} onClick={onClick}>
      {children}
    </li>
  )
}