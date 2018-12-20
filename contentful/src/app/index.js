import createRoot from './createRoot'

export default function buildApp(target, { api, app }) {
    const root = createRoot(target, 'contentful-main')

    root.innerHTML = `Config includes: ${api}, ${app}`
}