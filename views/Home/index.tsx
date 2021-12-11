import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import styles from '../../styles/Home.module.css'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <h1>{t('title', 'Hallo World')}</h1>
      <h2>Translation via getServerSideProps</h2>
      <Link href="/ssr">To SSR page</Link>
      <LanguageSwitcher />
    </div>
  )
}

export const getStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
