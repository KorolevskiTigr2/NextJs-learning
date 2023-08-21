

export default function Modal(props) {

    return(
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn .btn--alt" onClick={props.onCancel}>Cancel</button>
            <button className="btn" onClick={props.onConfrim}>Confrim</button>
        </div>
    );
}