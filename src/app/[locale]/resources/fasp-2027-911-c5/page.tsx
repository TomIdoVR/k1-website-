import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage from '@/components/CadSegmentPage'
import { FASP_ES, FASP_EN } from '@/content/fasp-2027'
import EbookDownloadForm from '@/components/EbookDownloadForm'

/* CAD plan item #12: FASP planning guide. Copy and its official sources live in
   src/content/fasp-2027.ts, shared with the printable PDF page (guia-pdf/). */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('fasp2027', locale)
}

export default async function Fasp2027Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  const download = (
    <section id="guia-pdf" style={{ padding: '0 24px 48px', maxWidth: 900, margin: '0 auto', scrollMarginTop: 80 }}>
      <EbookDownloadForm
        es={es}
        source="fasp-2027-pdf"
        pdfPath={es ? '/downloads/guia-fasp-2027-911-c5.pdf' : '/downloads/fasp-2027-911-c5-guide.pdf'}
        readOnlineHref={null}
        copy={es ? {
          formTitle: 'Guía FASP 2027 en PDF',
          formSub: 'Montos, programas 3.8.x, pesos de la fórmula, el ciclo anual con lo que debe tener listo en cada etapa y las fuentes oficiales. Para compartir con su equipo de planeación y finanzas.',
          btnSubmit: 'Descargar la guía',
          successTitle: 'Listo. Su guía está disponible.',
          successSub: 'Haga clic abajo para descargar el PDF.',
        } : {
          formTitle: 'FASP 2027 guide as a PDF',
          formSub: 'Amounts, programs 3.8.x, formula weights, the annual cycle with what to have ready at each stage, and the official sources. To share with your planning and finance team.',
          btnSubmit: 'Download the guide',
          successTitle: 'Done. Your guide is ready.',
          successSub: 'Click below to download the PDF.',
        }}
      />
    </section>
  )
  return <CadSegmentPage es={es} c={es ? FASP_ES : FASP_EN} download={download} />
}
