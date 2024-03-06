# EasyMDE(easy-markdown-editor) + @mdx-js

This component is made with [EasyMDE(easy-markdown-editor)](https://github.com/Ionaru/easy-markdown-editor)
and [@mdx-js](https://github.com/mdx-js/mdx)

## Good to notice...

I started this project for understanding/studying `mdx`.
It is totally okay if you want to reference my code for building better one (if it was any help, I would be very happy to get a github star⭐ )


## How to use

You can simply give two props to `MDXEditor` component.
1. components => Object(key: MDX Component name, value: MDX Component)
2. defaultString => mdx string

## Example
```tsx
import { MDXEditor } from "@bearlee/mdx-editor"

const MyButton = ({color}: {color: string}) => <button style={{ background: color }}>Button</button>;

const Example = () => {
  return <MDXEditor 
    components={{ MyButton }} 
    defaultString="Click Here <MyButton color='black'/>"
  />
}; 
```

## Future Work
I used `MDXProvider` directly in `MDXEditor` component for easy use. However, I know that using `Provider` inside a component is not a good choice.

- [ ] remove `MDXProvider` in `MDXEditor`
- [ ] add props for setting `EasyMDE`