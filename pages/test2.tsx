import {GetServerSidePropsContext} from "next";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  if (typeof window === "undefined") {
      console.log('SSR router locale', router.locale)
  } else {
      console.log('Client router locale', router.locale);
  }

  return (
      <>
          <h2>Test2: correct detection</h2>

          {router.locale === 'nl' && 'Dutch page'}
          {router.locale === 'de' && 'German page'}
      </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  console.log('getServerSideProps locale', context.locale);

  return {
    props: {}
  }
}