import { NodeList, FormatOptions } from './types'
import { Formatter } from './Formatter'

export const stringifySync = (
  list: NodeList,
  options: FormatOptions
): string => {
  const formatter = new Formatter(options)

  return list.reduce((buffer, node) => {
    return buffer + formatter.format(node)
  }, '')
}
