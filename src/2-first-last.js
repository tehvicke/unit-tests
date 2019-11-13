export const firstLast = (items) => {
  switch (items.length) {
    case 1:
      return `Only item: ${items[0]}`
    case 0:
      return `No items!`
  }
  return `First: ${items[0]}, Last: ${items[items.length - 1]}`
}
