import { Link } from '@/i18n/navigation'

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{
      maxWidth: '1200px', margin: '0 auto', padding: '16px 32px 0',
      fontSize: '12px', color: 'var(--muted)',
      display: 'flex', alignItems: 'center', gap: '8px',
    }}>
      {items.map((item, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {i > 0 && <span style={{ opacity: 0.4 }}>/</span>}
          {item.href ? (
            <Link href={item.href} style={{ color: 'var(--muted)', textDecoration: 'none' }}>{item.label}</Link>
          ) : (
            <span style={{ color: 'var(--cyan, #06b6d4)' }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
