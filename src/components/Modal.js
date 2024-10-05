import '../styles/Modal.css'

function Modal({openedModal,setModalState,children}){
  //Data

  //Behavior
  function modalClose(){
    setModalState('modal-closed')
  }

  //Render
  return (
    <div id="lmj-modal" className={`lmj-modal ${openedModal}`}>
      <div className="modal-content">
        <span className="close" onClick={modalClose} >&times;</span>
        {children}
      </div>
    </div>
  )

}

export default Modal