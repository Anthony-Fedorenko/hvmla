import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Library() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t('cafe.libraryTitle')} | Holy Virgin Mary Russian Orthodox Cathedral`;
  }, [t]);

  return (
    <>
      <div className='page-hero'>
        <div className='container'>
          <h1>{t('cafe.libraryTitle')}</h1>
          <p>{t('cafe.libraryDesc')}</p>
        </div>
      </div>

      <div className='section'>
        <div className='container'>
          <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div className='card'>
              <p style={{ margin: 0 }}>{t('cafe.libraryBorrow')}</p>
            </div>
            <div className='card'>
              <p style={{ margin: 0 }}>{t('cafe.libraryContact')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
