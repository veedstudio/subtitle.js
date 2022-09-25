import fs from 'fs'
import path from 'path'

export const fixtures = [
  'LaLaLand',
  'ManOfSteel',
  'WonderWoman'
]

export const getFilePath = (filename: string, extension: string): string =>
  path.join(
    __dirname,
    `/test/fixtures/${filename}.${extension}`
  )

export const getFixture = (filename: string, extension: string): Promise<string> =>
  new Promise((resolve, reject) =>
    fs.readFile(getFilePath(filename, extension), 'utf8', (err, contents) => {
      if (err) reject(err)
      resolve(contents)
    })
  )

export const writeFile = (filename: string, contents: string) => {
  const filepath = path.join(
    __dirname,
    `/test/fixtures/${filename}`
  )

  fs.writeFileSync(filepath, contents)
}
