import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userBod: '',
      PhoneNum: '',
      userId: '',
      userPw: '',
      nameCheck: false,
    };
  }
  nameCheck = e => {
    this.setState({ userName: e.target.value });
    if (e.target.value.length > 2 && RegExp(/[^가-힣]$/)) {
      this.setState({ nameCheck: true }, () => this.handleButton());
    }
  };

  userBod = e => {
    this.setState({ userBod: e.target.value });
    if (e.target.value.length === 8 && RegExp(/[^0-9]$/)) {
      this.setState({ userBod: true }, () => this.handleButon());
    }
  };

  phoneNumCheck = e => {
    this.setState({ PhoneNum: e.target.value });
    if (e.target.value.length === 11 && RegExp(/[^0-9]$/)) {
      this.setState({ phoneNumCheck: true }, () => this.handleButton());
    }
  };

  idCheck = e => {
    this.setState({ userId: e.target.value });
    if (e.target.value.length >= 4 && e.target.value.length <= 12) {
      this.setState({ idCheck: true }, () => this.handleButon());
    }
  };

  render() {
    return (
      <>
        <div className="header">
          <h1 className="header-text">뷰티포인트 X 녹차록 쇼핑몰 회원가입 </h1>
        </div>
        <div className="signup-container">
          <div className="wrap">
            <h1 className="signup-text">Sign up</h1>
            <div className="input-signup-box">
              <input
                type="text"
                class="input-username"
                id="userName"
                name="userName"
                placeholder="이름(실명으로 입력해주세요)"
                // onChange={this.handleInput}
              />
              <div className="container">
                <input
                  type="number"
                  class="input-DOB"
                  id="userDob"
                  name="userDob"
                  placeholder="생년월일8자리(ex.19980905)"
                  // onChange={this.handleInput}
                />
                <ul className="gender">
                  <li>
                    <input
                      type="radio"
                      id="male"
                      checked="checked"
                      name="radio"
                    ></input>
                    <label for="male">남자</label>
                  </li>
                  <li>
                    <input type="radio" id="female" name="radio"></input>
                    <label for="female">여자</label>
                  </li>
                </ul>
              </div>
              <input
                type="number"
                class="input-Num"
                id="userNum"
                name="userNum"
                placeholder="전화번호입력"
              />
              <input
                type="text"
                class="input-userId"
                id="userId"
                name="userId"
                placeholder="아이디 (4~12자 영문 대∙소문자)"
              />
              <input
                type="text"
                class="input-userPw"
                id="userPw"
                name="userPw"
                placeholder="비밀번호는 영문 대문자, 소문자, 숫자, 특수문자 중 최소 2가지 이상의 문자조합 8-16자로 입력해주세요"
              />
              <input
                type="text"
                class="input-pw-confirm"
                id="userPw"
                name="userPw"
                placeholder="비밀번호 확인"
              />
              <button className="signup-btn">회원가입</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
