import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { pipe } from "fp-ts/function";
import * as E from "fp-ts/lib/Either";
import * as T from "fp-ts/lib/Task";
import * as TE from "fp-ts/lib/TaskEither";
import styles from '../styles/Home.module.css'
import { AdobeFont } from '../src/components/adobeFont'
import { querySchema } from '../src/adapters/querySchema';
import { PickResult } from '../src/domain/pickResult';
import { initialCondition, PickMenuCondition } from '../src/domain/condition';
import { ConditionForm } from '../src/components/conditionForm';
import { ConditionFormProps, useCondition } from '../src/hooks/useCondition';
import { dtoToCondition, dtoToPickResult, PickResultDTO, serverSideFetch } from '../src/adapters/fetchPickResult';
import { Button } from '@mui/material';
import { useResult } from '../src/hooks/useResult';
import { ResultView } from '../src/components/resultView';

/**
 * Props
 */
type Props = {
  condition: PickMenuCondition,
  pickResult: PickResult | null,
};

/**
 * 初期Props
 */
const initialProps: Props = {
  condition: initialCondition,
  pickResult: null,
};

const Home: NextPage<Props> = ({condition, pickResult}) => {
  
  const props: ConditionFormProps = useCondition(condition);
  const {result, fetchPickResult} = useResult(pickResult);

  return (
    <div className={styles.container}>
      <Head>
        <title>Sakuna Menu Generator</title>
        <meta name="description" content="天穂のサクナヒメ - 献立選出" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdobeFont kitId='hfd7jpz' scriptTimeout={3000} async={true} />

      <main className={styles.main}>
        <ConditionForm {...props}/>
        <Button variant='contained' onClick={e => fetchPickResult(props.condition)}>選出</Button>
        {result && <ResultView {...result}/>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
};

/**
 * ServerSideRendering
 * @param context 
 * @returns 
 */
export const getServerSideProps: GetServerSideProps<Props> = async (context) => (
  pipe(
    context.query,
    querySchema.safeParse,
    (parse) => parse.success ?
      pipe(
        TE.tryCatch(
          () => serverSideFetch(parse.data),
          E.toError,
        ),
        TE.fold<Error, PickResultDTO, {props: Props}>(
          error => T.of({ props: initialProps }),
          dto => T.of({
            props: {
              condition: dtoToCondition(dto),
              pickResult: dtoToPickResult(dto),
            }
          })
        )
      )() :
      { props: initialProps }
  )
);

export default Home
