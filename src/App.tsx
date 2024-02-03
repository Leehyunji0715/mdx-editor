import { MDXEditor } from './components'

function App(): React.ReactNode {
  return (
    <>
      <MDXEditor
        components={{ Highlight }}
        defaultValue={`
# Heading \n
<Highlight color="black">This is black</Highlight> 
`}
      />
    </>
  )
}

function Highlight({ children, color }: { children: React.ReactNode, color: string }) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem'
      }}
    >
      {children}
    </span>
  )
}

export default App
