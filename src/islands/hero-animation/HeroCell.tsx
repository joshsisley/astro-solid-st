import { onMount, createSignal, onCleanup, Show, Switch, Match } from 'solid-js';

export const HeroCell = (props:any) => {
  const [letter, setLetter] = createSignal('');
  const [loading, setLoading] = createSignal(true);
  const { char, key } = props;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let count = 0;

  function loopRandomLetters() {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    setLetter(randomLetter);
  }

  onMount(() => {
    let count = 0;
    loopRandomLetters();
    const interval = setInterval(() => {
      if (count === 3) {
        clearInterval(interval);
        setLetter(char);
        setLoading(false);
      } else {
        loopRandomLetters();
        count++;
      }
    }, 200)

    onCleanup(() => {
      clearInterval(interval);
    })
  })

  return (
    <Show when={!loading()} fallback={<div class="hero-cell">{letter()}</div>}>
    <Switch key={key} fallback={<div class="hero-cell">{letter()}</div>}>
      <Match when={letter() === ' '}>
        <div class="hero-cell is-space"></div>
      </Match>
      <Match when={letter() === '<'}>
        <div class="hero-cell is-symbol text-blue-500">
          <span>&#10094;</span>
        </div>
      </Match>
      <Match when={letter() === '/'}>
        <div class="hero-cell is-symbol font-bold text-blue-500">
          <span>&#8260;</span>
        </div>
      </Match>
      <Match when={letter() === '>'}>
        <div class="hero-cell is-symbol text-blue-500">
          <span>&#10095;</span>
        </div>
      </Match>
      <Match when={letter() === '1'}>
        <div class="hero-cell is-symbol icon-neon">
          <span>{'|>'}</span>
        </div>
      </Match>
      <Match when={letter() === '2'}>
        <div class="hero-cell is-symbol" data-span="2">
          <span>{'~~>'}</span>
        </div>
        <div class="hero-cell"></div>
      </Match>
      <Match when={letter() === '|'}>
        <div class="hero-cell is-symbol icon-blue" data-span="2">
          <span>{'|=>'}</span>
        </div>
        <div class="hero-cell"></div>
      </Match>
    </Switch>
    </Show>
  )
}