import 'easymde/dist/easymde.min.css'
import MDXEditorCore from './MDXEditorCore'
import { MDXProvider } from '@mdx-js/react'

interface EditorProps {
  components?: any // Record<string, React.ReactNode>
  defaultValue?: string
}

export default function MDXEditor({ defaultValue, components }: EditorProps): React.ReactNode {
  return (
    <MDXProvider components={components}>
      <MDXEditorCore defaultValue={defaultValue} />
    </MDXProvider>
  )
}
