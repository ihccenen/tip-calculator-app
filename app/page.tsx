'use client';

import { Space_Mono } from 'next/font/google';
import Input from './components/Input';
import styles from './page.module.css';
import iconDollar from '../public/icon-dollar.svg';
import iconPerson from '../public/icon-person.svg';
import useInput from './components/hooks/useInput';

const spaceMono = Space_Mono({ weight: '700', subsets: ['latin'] });
const tipList = ['5%', '10%', '15%', '25%', '50%'];

export default function Home() {
  const bill = useInput('');
  const tip = useInput('');
  const numOfPeople = useInput('');

  return (
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
          Number of People
          <Input
            name="number-of-people"
            value={numOfPeople.value}
            placeholder="0"
            handleChange={numOfPeople.handleChange}
            svg={iconPerson}
            alt="person"
          />
        </label>
      </div>
      <div />
    </form>
  );
}
