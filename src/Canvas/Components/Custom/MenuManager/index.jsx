import React from 'react'
import MenuBar from '../../../../SharedComponents/Menu'
import CustomHandleWithButton from '../CustomHandleWithButton'

function MenuManager({
  showHandle = true,
  children,
  sourceID,
  handleType,
  handleID,
}) {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <>
      {showHandle && (
        <CustomHandleWithButton
          setShowMenu={setShowMenu}
          id={handleID}
          type={handleType}
        />
      )}
      {children}
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            fontSize: '8px',
            top: '0px',
            left: '120px',
            zIndex: 1000,
          }}
        >
          <MenuBar
            close={() => setShowMenu(false)}
            source={sourceID}
            handleID={handleID}
          />
        </div>
      )}
    </>
  )
}

export default MenuManager
