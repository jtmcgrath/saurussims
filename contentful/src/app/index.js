import createRoot from './createRoot'

export default function buildApp(target, header, { api, app }) {
    const root = createRoot(target, 'contentful-main')
    const nav = createRoot(header, 'contentful-nav')

    root.innerHTML = `Config includes: ${api}, ${app}`
}