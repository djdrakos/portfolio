import { formatClassName } from '../helpers/formatting-helpers'


export default function Section({title, children, ...props}) {
  const className = props.className ?? formatClassName(title);
  return (
    <section className={className}>
      { title && <h4>{title}</h4> }
      { children && <div className='content'>{children}</div>}
    </section>
  )
}