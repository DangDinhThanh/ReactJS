/**
 * Component
 * - là một khối code độc lập
 * - có thể tái sử dụng nhiều lần
 * -Component cho phép chia các UI thành nhiều phần nhỏ( mỗi phần do một component đảm trách)
 *
 *
 * + Các biến ( thông tin) trong component được lưu trữ trong một đối tượng là state
 * + Trong component có hàm constructor() thì hàm này tự động chạy khi component khởi tạo
 * + Trong hàm contructor(), phải chạy lệnh super() để chạy constructor của React trước.
 * + có hai cách tạo component là  class và function.
 *
 *
 *
 * 1. Functional component
 *
 * Là một hàm Javascript  bình thường nhưng giá trị return lầ một object React Element. Object này được tạo ra bởi hàm React.createElement hoặc React.cloneElement
 *
 * -Không dùng JXS
 *
 * import React from 'react';

   // Hàm truyền thống
   function EmailField() {
      return React.createElement(
         'input',
         {
            type: 'email'
         }
      );
   }

   // Arrow function
    const SubscriptionForm = () =>
       React.createElement(
          'form',
           null,
           React.createElement(EmailField)
    );
 *
 *
 * - Dùng JSXimport React from 'react';

   // Hàm truyền thống
   function EmailField() {
      return (<input type="email"/>);
   }

   // Arrow function
   const SubscriptionForm = () => (
      <form>
         <EmailField />
      </form>
   );
 *
 *
 *
 * 2. class component
 * Là một class JavaScript thừa kế từ React.Component hoặc React.PureComponenthay một Class component khác.
 * Class này phải implement hàm render() có giá trị return là một object React Element, nội dung hàm render() này cũng giống như Functional component.
 *
 *
 * import { Component, PureComponent } from 'react';

   class EmailField extends Component {
      render() {
         return (<input type="email" />);
      }
   }

   class SubscriptionForm extends PureComponent {
      render() {
          return (
             <form>
                <EmailField />
             </form>
          );
      }
   }

 *
 *
 * 3.Đặt tên cho component
 *
 * Tên của React Component phải viết hoa dưới dạng Pascal case.
 *
 * function numberInput() {
      return (<input type="number");
   }
   let NumberInput = numberInput;
   <NumberInput />
 *
 *
 *
 * 4. Truyền tham số từ ngoài vào cho React Component.
 * +Tham số của React Component được gọi là «property».  Những ngôn ngữ markup như XML, HTML gọi tham số truyền vào là «attribute».
 * +Attribute của JSX có thể nhận vào bất kỳ kiểu dữ liệu nào mà một biến JavaScript có thể chứa, nhưng attribute của HTML nói riêng và XML nói chung chỉ có một kiểu dữ liệu chuỗi (string)
 * +Khi truyền dữ liệu kiểu string cho React Component thì phải có cặp ngoặc nháy "...", nếu truyền kiểu dữ liệu khác, hoặc truyền biến, thì phải đặt trong cặp ngoặc móc {...}.
 *
 * function SalaryInput () {
      const holderText = 'Enter your salary';
      return (
         <NumberInput
            label="Salary"
            placeholder={holderText}
            readonly={false}
            decimalDigits={2}
         />
      );
   }
 *
 *+Truyền kiểu dữ liệu nào vào thẻ HTML thì cũng được coi là string.
 *
 * +Tham số kiểu boolean có giá trị true có thể được viết rút gọn, nhưng giá trị false thì phải viết ở dạng đầy đủ
 *
 * ví dụ:<NumberInput readonly />
         // Cũng giống như
         <NumberInput readonly={true} />
 *
 *5. Nhận tham số từ bên trong React Component.
 *
 * - Với Functional component
 * +Component hàm nhận được một tham số là một object gồm các key và value được truyền vào từ JSX.
 *
 * Ví dụ:
 * const NumberInput = (props) => {
      console.log(props); // In ra { label: "Salary", placeholder: "Enter your salary", readonly: false, decimalDigits: 2 }
      return (...);
   };
 *
 *
 * - Với class component
 *
 *+ Component lớp nhận được một class property tên là props. Truy cập đến nó bằng cú pháp this.props.
 *
 * Example:
 * class NumberInput extends React.Component {
      render() {
         console.log(this.props); // In ra { label: "Salary", placeholder: "Enter your salary", readonly: false, decimalDigits: 2 }
         return (...);
      }
   }
 */