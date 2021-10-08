import React, { Suspense, lazy, ComponentType } from "react"

const headElement = document.head || document.getElementsByTagName("head")[0]
const _importedScript: { [src: string]: true } = {}
/**
 * load dependency by script tag
 */
export function importScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (src in _importedScript) {
      resolve()
      return
    }
    const script = document.createElement("script")
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.onerror = err => {
      headElement.removeChild(script)
      reject(new URIError(`The Script ${src} is no accessible.`))
    }
    script.onload = () => {
      _importedScript[src] = true
      resolve()
    }
    headElement.appendChild(script)
    script.src = src
  })
}

export function loadScript<T extends ComponentType<any>>(
  src: string,
  factory: () => Promise<{ default: T }>,
  Fallback?: React.ComponentType
) {
  const Comp = lazy(() => importScript(src).then(factory))

  return (props: any) => {
    return (
      <Suspense fallback={Fallback ? <Fallback /> : null}>
        <Comp {...props} />
      </Suspense>
    )
  }
}
