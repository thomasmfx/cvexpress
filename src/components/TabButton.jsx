export default function TabButton({
  tab,
  isCurrentTab,
  handleClick,
  children
}) {
  return (
    <button
      className={isCurrentTab ? 'action highlight' : 'action'}
      data-tab={tab}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}