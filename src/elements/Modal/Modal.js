import s from 'elements/Modal/Modal.scss'

export default class  extends React.Component {
  static propTypes = {
    content: React.PropTypes.any.isRequired,
    closeModal: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {
    $("body").css("overflow", "hidden");
  }

  componentWillUnmount() {
    $("body").css("overflow", "visible");
  }

  render() {
    var st = this.state;
    const {content} = this.props;
    return (
      <div className="modalContainer">
        <div
          className="closeButton"
          onClick={this.props.closeModal.bind(this)}
        >
          &larr; Close
        </div>
        <div className="modalContent">
          {content}
        </div>
      </div>
    )
  }
}
