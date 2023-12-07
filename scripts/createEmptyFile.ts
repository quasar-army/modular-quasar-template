import fs from 'fs'

export function createEmptyFile (filePath: string) {
  fs.writeFileSync(filePath, '')
}
