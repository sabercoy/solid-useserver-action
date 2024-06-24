import { useAction } from '@solidjs/router'
import { doThingAction } from '../server-functions/send-verify-email'

export default function Home() {
  const doThing = useAction(doThingAction)

  const attemptThing = async (event: Event) => {
    event.preventDefault()

    await doThing({
      email: 'wouldbefromsignal'
    }).then(result => {
      console.log('then')
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <main>
      <form onSubmit={attemptThing}>
        <button onClick={attemptThing}>EXECUTE</button>
      </form>
    </main>
  );
}
