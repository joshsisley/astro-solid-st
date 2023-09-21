import { createSignal, onMount, createEffect, For, onCleanup, Switch, Match } from 'solid-js';
import { HeroCell } from './HeroCell';
import './hero.css';

/**
 * MAPPING FOR NUMBERS
 * 1 -> Play Icon
 * 2 -> 
 * 3 -> 
 * 4 -> &#8614;
 */
const testArr = "1ENTIRELY IN |THE CLOUD?".split('');
const arrOptions = [["1ENTIRELY IN", " |THE CLOUD?"], ["1DESIGNED FOR", "  <FULLSTACK/>", " DEVS"]];
const iconMap = {
  T: '/images/triangle.svg',
}

export const HeroAnimation = () => {
  const [displayedTextArr, setDisplayedTextArr] = createSignal([]);

  onMount(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < testArr.length) {
        setDisplayedTextArr((items) => [...items, testArr[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  })

  return (
    <div class="hero-container mt-24">
      <div class="hero-slide">
        <div class="grid grid-cols-12">
          <For each={displayedTextArr()}>
            {(char:any, index:any) => (
              <HeroCell char={char} />
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
