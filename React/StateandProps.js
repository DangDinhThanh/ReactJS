/**
 * 1.State
 * + State là một đối tượng, nó lưu trữ dữ liệu động của một component.
 * + Là dữ liệu động, nó cho phép một component theo doic thông tin thay đổi giữa các render và làm cho nó có thể tương tác.
 * + State  chỉ có thể sử dụng ở trong một component sinh ra nó.
 * + Nếu dự đoán được một component cần quản lý state, thì nó nên được tạo ở trong một class component.
 *
 */


// Component khởi tạo và khởi tạo state với date = current time
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() { // Khởi tạo Timer
    this.timerID = setInterval( // Khởi tạo interval
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() { // clear Timer
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ // update state mỗi giây
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


/**
 * 2. Props
 * + là từ viết ngắn gọn của properties
 * + là một đối tượng, nó lưu trữ các giá trị của các atttribute( thuộc tính), của một thẻ (Tag)
 * + Là cách mà component có thể nhận được các giá trị của thuộc tính truyền vào từ bên ngoài vào.
 * + là cách mà các component có thể trao đổi với nhau.
 */

function Welcome(props) { // Welcome là component
  return <h1>Hello, {props.name}</h1>; // name là property
}

const element = <Welcome name="ReactJS" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

/**
 * so sánh giữa state và props
 *
 * Giống nhau:
 * + state và props có thể nhận giá trị ban đầu từ component cha
 * + có thể set giá trị mặc định bên trong component.
 * + có thể set giá trị ban đầu cho component con
 *
 * *
 *  khác nhau:
 * +Props có thể thay đổi bởi component cha còn state thì ko.
 * + Props không thể thay đổi bên trong component còn state thì có.
 * + Props có thể thay đổi trong các component con còn state thì ko.
 *
 *
 *
 */