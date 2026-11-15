function Modal({
  isOpen,
  onClose,
  title,
  children,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-box"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          type="button"
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        {title && (
          <h2>
            {title}
          </h2>
        )}

        <div className="modal-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Modal;