import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitcher = () => {
  const router = useRouter()

  return (
    <div>
      {['de', 'en'].map((language) => (
        <Link key={language} href={router.pathname} locale={language}>
          <a
            style={{
              display: 'inline-flex',
              padding: '0.3em',
              marginTop: '1em',
            }}
          >
            {language.toUpperCase()}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default LanguageSwitcher
