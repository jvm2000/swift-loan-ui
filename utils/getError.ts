export default function<T extends Record<string, any> = {}>(errors: T, attribute: string) {
  if (typeof errors !== 'object') return ""
  if (!Object.keys(errors).length) return ""

  return errors[attribute] ? errors[attribute][0] : ""
}