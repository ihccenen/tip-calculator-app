'use client';

import { Space_Mono } from 'next/font/google';
import Image from 'next/image';
import Input from './components/Input';
import useInput from './components/hooks/useInput';
import styles from './page.module.css';
import iconDollar from '../public/icon-dollar.svg';
import iconPerson from '../public/icon-person.svg';
import logo from '../public/logo.svg';

const spaceMono = Space_Mono({ weight: '700', subsets: ['latin'] });
const tipList = ['5%', '10%', '15%', '25%', '50%'];

export default function Home() {
  const bill = useInput('');
  const tip = useInput('');
  const numOfPeople = useInput('', /^(?!0{2,})[0-9]*$/);

  const handleClick = () => {
    bill.reset();
    tip.reset();
    numOfPeople.reset();
  };

  const btnDisabled = bill.value === '' && tip.value === '' && numOfPeople.value === '';

  return (
    <div className={styles.wrapper}>
      <Image className={styles.logo} src={logo} alt="logo" />
      <form className={`${styles.form} ${spaceMono.className}`}>
        <div className={styles.inputsWrapper}>
          <label className={styles.label} htmlFor="bill">
            Bill
            <Input
              name="bill"
              value={bill.value}
              placeholder="0"
              handleChange={bill.handleChange}
              svg={iconDollar}
              alt="dollar"
            />
          </label>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Select Tip %</legend>
            {tipList.map((name) => (
              <div key={name}>
                <Input
                  type="radio"
                  name={name}
                  value={name}
                  checked={tip.value === name}
                  handleChange={tip.handleChange}
                />
                <label htmlFor={name}>{`${name}`}</label>
              </div>
            ))}
            <Input
              name="custom-tip"
              value={tip.value.includes('%') ? '' : tip.value}
              placeholder="Custom"
              handleChange={tip.handleChange}
            />
          </fieldset>
          <label className={styles.label} htmlFor="number-of-people">
            <div className={styles.numOfPeople}>
              <span>Number of People</span>
              {numOfPeople.value[0] === '0' && <span className={styles.invalid}>Can&apos;t be zero</span>}
            </div>
            <Input
              className={numOfPeople.value === '0' ? styles.invalid : ''}
              name="number-of-people"
              value={numOfPeople.value.replace(/^0{2,}/, '')}
              placeholder="0"
              handleChange={numOfPeople.handleChange}
              svg={iconPerson}
              alt="person"
            />
          </label>
        </div>
        <div className={styles.tip}>
          <div>
            <div className={styles.price}>
              <div>
                <p>Tip Amount</p>
                <p className={styles.person}>/ person</p>
              </div>
              <div className={styles.amount}>$0.00</div>
            </div>
            <div className={styles.price}>
              <div>
                <p>Total</p>
                <p className={styles.person}>/ person</p>
              </div>
              <div className={styles.amount}>$0.00</div>
            </div>
          </div>
          <button
            className={styles.button}
            type="button"
            onClick={handleClick}
            disabled={btnDisabled}
          >
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}
