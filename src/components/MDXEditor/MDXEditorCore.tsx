import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import * as runtime from 'react/jsx-runtime'
import { useMDXComponents } from '@mdx-js/react'
import { EvaluateOptions, evaluateSync } from '@mdx-js/mdx'
import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'

interface EditorCoreProps {
  defaultValue?: string
}

export const generate = (body: string, mdxComponents?: any) => {
  const { default: MDXContent } = evaluateSync(body, {
    ...(runtime as Readonly<EvaluateOptions>)
  }) // jsx element

  // https://mdxjs.com/packages/mdx/#notes
  // MDXContent({props}) 형식으로 직접 호출하는게 더 빠르다고 나옴
  return MDXContent({ components: mdxComponents })
}

export default function MDXEditorCore({ defaultValue }: EditorCoreProps): React.ReactNode {
  const ref = useRef<EasyMDE>()
  const mdxComponents = useMDXComponents()

  useEffect(() => {
    const element = document.getElementById('my-text-area') ?? undefined
    const div = document.createElement('div')
    const root = createRoot(div)

    if (ref.current === undefined) {
      ref.current = new EasyMDE({
        element,
        initialValue: defaultValue,
        previewRender: (plainText) => {
          try {
            // https://react.dev/reference/react-dom/server/renderToString#removing-rendertostring-from-the-client-code
            const ele = generate(plainText, mdxComponents)
            flushSync(() => {
              root.render(ele)
            })
            return div.innerHTML
          } catch (err: any) {
            if (typeof err === 'object') {
              flushSync(() => {
                root.render(
                  <>
                    <h1>{err?.name}</h1>
                    <p>{err?.message}</p>
                  </>
                )
              })
              return div.innerHTML
            }
          }
          return ''
        }
      })
      EasyMDE.toggleSideBySide(ref.current)
    }
  }, [])

  return <textarea id="my-text-area" />
}
