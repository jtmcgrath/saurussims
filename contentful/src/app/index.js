export default function buildApp(target, { api, app }) {
    target.innerHTML = `Config includes: ${api}, ${app}`
}