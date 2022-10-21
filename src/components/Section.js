import { formatClassName } from '../helpers/formatting-helpers'


export default function Section({title, children, ...props}) {
  const className = props.className ?? formatClassName(title);
  return (
    <section className={className}>
      { title && <h2>{title}</h2> }
      {children}
    </section>
  )
}