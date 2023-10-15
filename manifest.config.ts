import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from './package.json'
const { version } = packageJson

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name:
    env.mode === 'staging'
      ? '[Development] DuoLingo Extended'
      : 'DuoLingo Extended',
  version: getVersion(),
  version_name: version,
  action: { "default_popup": "index.html" }
}))

function getVersion() {
  const [major, minor, patch, label = '0'] = version
    .replace(/[^\d.-]+/g, '')
    .split(/[.-]/)

  return `${major}.${minor}.${patch}.${label}`
}