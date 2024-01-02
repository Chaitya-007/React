interface Props {
  // text: string;
  children: string;
  onClose: () => void;
}

// const MyComponent = ({text}: Props) => {
const Alert = ({ children, onClose }: Props) => {
  return (
    // <div class="alert alert-primary">{text}</div>
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
};

export default Alert;
