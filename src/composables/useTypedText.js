import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useTypedText(strings, typeSpeed = 100, backSpeed = 20) {
  const output = ref('')
  let stringIndex = 0
  let charIndex = 0
  let deleting = false
  let timer

  function tick() {
    const current = strings[stringIndex] || ''

    if (!deleting) {
      output.value = current.slice(0, charIndex + 1)
      charIndex += 1
      if (charIndex === current.length) {
        deleting = true
        timer = setTimeout(tick, 1200)
        return
      }
      timer = setTimeout(tick, typeSpeed)
      return
    }

    output.value = current.slice(0, charIndex - 1)
    charIndex -= 1
    if (charIndex === 0) {
      deleting = false
      stringIndex = (stringIndex + 1) % strings.length
      timer = setTimeout(tick, 400)
      return
    }
    timer = setTimeout(tick, backSpeed)
  }

  onMounted(() => {
    timer = setTimeout(tick, 400)
  })

  onBeforeUnmount(() => {
    clearTimeout(timer)
  })

  return { output }
}
