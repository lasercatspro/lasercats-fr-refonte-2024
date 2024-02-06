import Container from '@/app/_components/container'
import cn from 'classnames'
import { type ReactNode } from 'react'

interface Props {
  preview?: boolean
}

const Alert = ({ preview }: Props): ReactNode => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !(preview ?? false)
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {(preview ?? false)
            ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
              )
            : (
            <>
              The source code for this blog is{' '}
              <a
                href={'https://github.com/vercel/next.js/tree/canary/examples/'}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
              )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
