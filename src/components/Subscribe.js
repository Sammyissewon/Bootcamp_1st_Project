import React, { useState } from 'react';
import './Subscribe.css'



const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // 이메일 제출 처리 (예: API 호출)
      console.log('구독할 이메일:', email);
      // 이메일 입력 후 초기화
      setEmail('');
    };

    return (
        <div className='Subscribe'>
            <div className='head'>Wix 블로그<br />이메일로 구독하세요!</div>
            <div className='sub'>
                Wix 홈페이지 제작 및 마케팅에 관한 새로운 콘텐<br />츠를 메일로 편하게 받아보실 수 있습니다.</div>
            <form onSubmit={handleSubmit} className='form-container'>
        <input
          type='email'
          placeholder='이메일 주소'
          className='email-input'
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type='submit' className='subscribe-button'>구독하기</button>
      </form>
        </div>
    );
};

export default Subscribe;