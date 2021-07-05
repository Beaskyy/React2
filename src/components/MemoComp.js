import React from 'react'

function MemoComp(props) {
  console.log('Rendering Memo Component')
  return (
    <div>
      Memo - {props.name}
    </div>
  )
}

export default React.memo(MemoComp)
