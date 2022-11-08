function Modal(props) {

    return (
      <div className="bg-white p-1 flex items-center calc w-[30rem] z-20 fixed top-[20vh] h-[40rem] shadow-white-500/50">
        <p>
          Are you sure?
          <button className="" onClick={props.onCancle}>
            Cancle
          </button>
          <button className="" onClick={props.onClick}>
            Confirm
          </button>
        </p>
      </div>
    );
  }
  
  export default Modal;