import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useState } from 'react';

export default function Home() {
  const [adultCount, setAdultCount] = useState(1);

  const increase = () => {
    if (adultCount === 3) return;
    setAdultCount(adultCount + 1);
  };

  const decrease = () => {
    if (adultCount === 0) return;
    setAdultCount(adultCount - 1);
  };

  const onChange = ({ target }) => {
    const { valueAsNumber } = target;

    setAdultCount(valueAsNumber);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>승객 선택</h1>
        <h2>성인</h2>
        <button
          className={`${styles['round-button']} ${styles['minus-button']}`}
          type='button'
          aria-label='성인 탑승자 한명 줄이기'
          onClick={decrease}
          aria-disabled={adultCount === 0}
        ></button>
        <input
          className={styles['adult-amount']}
          type='text'
          aria-label='성인'
          min={0}
          max={3}
          value={adultCount}
          onChange={onChange}
        />
        <span className={styles['adult-amount-hidden']} aria-live='assertive'>
          성인 승객 {adultCount}명으로 변경
        </span>
        <button
          className={`${styles['round-button']} ${styles['plus-button']}`}
          type='button'
          aria-label='성인 탑승자 한명 늘리기'
          onClick={increase}
          aria-disabled={adultCount === 3}
        ></button>
      </main>
    </div>
  );
}
