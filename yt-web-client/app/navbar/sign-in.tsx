'use client';
import { signInWithGoogle, signOut } from '../firebase/firebase';
import { User } from 'firebase/auth';
import styles from './sign-in.module.css';
import { Fragment } from 'react';

interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {
  return (
    <Fragment>
      {user ? (
        <button className={styles.signin} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button className={styles.signin} onClick={signInWithGoogle}>
          Sign in
        </button>
      )}
    </Fragment>
  );
}
