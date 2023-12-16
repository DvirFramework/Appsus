import { eventBusService } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React
export function UserMsg() {
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    // LISTEN TO EVENT TO HAPPEN
    const unsubscribe = eventBusService.on("show-user-msg", (msg) => {
      setMsg(msg)
      setTimeout(() => {
        setMsg(null)
      }, 1500)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  if (!msg) return null
  return (
    <section className={`user-msg ${msg.type}`}>
      <p>{msg.txt}</p>
    </section>
  )
}
