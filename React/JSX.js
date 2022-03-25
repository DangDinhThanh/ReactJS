/**
 * JSX = JS + XML
 * JSX là một phần mở rộng cú pháp cho JS.
 * JSX sử dụng với React để mô tả UI, về ngôn ngữ mẫu
 *
 * XML:
 *  Có 3 loại XML: XML elements, XML attributes và XML children
 * Các XML này được chuyển đổi thành các đối số truyền vào React.createElement
 *
 *
 * 1.Cú pháp sử dụng JSX:
 * <JSXName JSXAttributes>
 * ...
 * </JSXName>
 *
 * ví dụ:
 * <MyButton color="blue" shadow={2}>
 *   Click Me
 * </MyButton>
 *
 * + compile sang Js
 *
 * React.creatElement(
 *   MyButton,
 *   {color: 'blue', shadowSize: 2},
 *   'Click Me'
 * )
 *
 * + cũng có thể sử dụng một form đóng của tag nếu nó ko có giá trị
 *
 * React.createElement(
 *    'div',
 *    {className: 'sidebar},
 *    null
 * )
 *
 * 2. React must be in scope( react phải ở trong phạm vi)
 * Nhằm cảnh báo mất React khi sử dụng JSX. Giả sử khi sử dụng JSX
 * <a/>
 * mở rộng đến:
 * React.createElement("a")
 * đoạn code sẽ raise ra warning:
 * const Stateless = (props) => <div>Hello {this.props.name}</div>;
 *
 * Do vậy thư viện React nên đc import vào JSX code
 *  import React from 'react';
 *  const Stateless = (props) => <div>Hello {this.props.name}</div>;
 *
 * 3.Using Dot Notation for JSX Type( Sử dụng DOT cho loại JSX)
 * Gọi đến một React component bằng việc sử dụng"."
 * Ví dụ: MyComponents.DatePicker là một component, sử dụng trực tiếp nói từ JSX bằng cách
 *
 *  import React from 'react';

 *  const MyComponents = {
 *   DatePicker: function DatePicker(props) {
 *     return <div>Imagine a {props.color} datepicker here.</div>;
 *   }
 *  }

 *  function BlueDatePicker() {
 *    return <MyComponents.DatePicker color="blue" />;
 *  }
 *
 *
 * 4. HTML Tags vs. React Components
 * +React có thể render HTML tags (dạng string) hay React components. Để render một HTML tag, chỉ cần sử dụng tên bằng chữ viết thường trong JSX.
 * ví dụ:
 *   var helloEl = <div className: "hello">Hello, world!</div>
 *
 * +Để render một React Component, chỉ cần tạo một biến local bắt đầu bằng chữ cái viết Hoa
 * ví dụ:
 *  var Nav;
 *  // Input (JSX)
 *  var app = <Nav color="blue" />;
 *  // Output (JS)
 *  var app = React.createElement(Nav, {color:"blue"});
 *
 *
 * 5.Props in JSX
 * Có thể truyền vào bất kì một cú pháp JS như là một prop bằng việc đặt chúng trong cặp dấu {} trong JSX
 *  ví dụ:
 * <MyComponent foo={1 + 2 + 3 + 4} />
 * Ở MyComponent ở trên thì giá trị của props.foo sẽ là 10. Câu lệnh if và vòng lặp for không phải là một expression của Javascript nên chúng không được sử dụng trực tiếp trong JSX.
 * ta có thể làm như sau:
 *   function NumberDescriber(props) {
 *     let description;
 *     if (props.number % 2 == 0) {
 *       description = <strong>even</strong>;
 *     } else {
 *       description = <i>odd</i>;
 *     }
 *     return <div>{props.number} is an {description} number</div>;
 *
 * 6.String Literals
 * truyền một string vào props có hai cách tương đương nhau
 * <MyComponent message="hello world" />
 * <MyComponent message={'hello world'} />
 * ví dụ:
 * <MyComponent message="<3" />
 * <MyComponent message={'<3'} />
 *
 *
 * 7.Props Default to "True"
 * có hai cách tương đương không truyền giá trị cho props mà nó mặc định là true
 *  <MyTextBox autocomplete />
 *  <MyTextBox autocomplete={true} />
 *
 *
 * 8. Spread Attributes
 *    function App1() {
      return <Greeting firstName="Ben" lastName="Hector" />;
    }

    function App2() {
      const props = {firstName: 'Ben', lastName: 'Hector'};
      return <Greeting {...props} />;
    }
 *
 *
 * 9.Children in JSX
 * Có 5 cách để truyền children
 *
 * Cách 1: Có thể đặt một string giữa tag mở và đóng và props.children sẽ là một string. Cái này hữu ích trong việc xây dựng các HTML elements:
 * <MyComponent>Hello world!</MyComponent>
 *
 *
 * Cách 2:JSX loại bỏ khoảng trắng ở điểm bắt đầu và kết thúc của một dòng, nó cũng loại bỏ dòng trống. Vì vậy tất cả các render sau là tương đương:
 *
 * <div>Hello World</div>

    <div>
      Hello World
    </div>

    <div>
      Hello
      World
    </div>

    <div>

      Hello World
    </div>


 *
 * Cách 3: có thể khai báo một JSX elements như là một children. Điều này hữu ích trong việc hiển thị một nhóm các components:
 * <MyContainer>
      <MyFirstComponent />
      <MySecondComponent />
    </MyContainer>
 *
 *
 *
 *Cách 4: Có thể kết hợp nhiều cách khai báo children, vì vậy có thể sử dụng một string cùng với JSX children. Ví dụ dưới đây kết hợp làm cho code vaild ở cả 2 dạng là JSX và HTML:
 *<div>
      Here is a list:
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
 *
 *
 * Cách 5: Sử dụng câu lệnh điều kiện trong render React elements. Dòng JSX chỉ renders một <Header /> neu showHeader la true:
 *   <div>
      {showHeader && <Header />}
      <Content />
    </div>
 *
 */