import { createSignal } from 'solid-js';
import './terminal.css';

export const ContactTerminal = () => {
  const [terminalOpen, setTerminalOpen] = createSignal(false);
  const [form, setForm] = createSignal({
    name: '',
    email: '',
    message: ''
  });

  const toggleTerminal = () => {
    console.log('terminal toggle')
    console.log(terminalOpen());
    setTerminalOpen(!terminalOpen());
  }

  return (
    <section class={terminalOpen() ? 'terminal terminal-open' : 'terminal'}>
      <form class="container">
        <div class="bg"></div>
        <button onClick={() => toggleTerminal()} class="relative group w-full text-left flex items-center gap-6 text-gray-500 px-6 py-4">
          <h2 class="flex-1 text-sm">Contact Me</h2>
          <div class="flex items-center gap-1 text-[13px] max-md:text-[#56657d]">
            Spaces: 2
          </div>
          <span class="text-[13px] max-md:text-[#56657d]">UTF-8</span>
          <span class="dynamic-dropdown-icon"></span>
        </button>
        <div class="border-t border-gray-300 p-6 flex items-center flex-wrap justify-stretch gap-x-6 gap-y-4">
          <p class="text-xs text-gray-400 w-full">Project IDX is currently a limited preview. Enter your details below to join the
				waitlist to try it.</p>
          <div class="flex flex-col max-md:space-y-1">
            <div class="form-control-wrapper flex items-end gap-2">
              <label htmlFor="request-name">Name</label>
              <span class="text-gray-500">......<span class="max-md:hidden">.......</span></span>
              <input class="form-control flex-1 py-2 -mb-1" type="text" id="request-name" name="name" maxlength="128" placeholder="{Enter}" required />
            </div>
            <div class="form-control-wrapper flex items-end gap-2">
              <label htmlFor="request-name">Email</label>
              <span class="text-gray-500">......<span class="max-md:hidden">.......</span></span>
              <input class="form-control flex-1 py-2 -mb-1" autocomplete="email" type="email" id="request-email" name="email" maxlength="128" placeholder="{Enter}" required />
            </div>
            <div class="form-control-wrapper flex items-end gap-2">
              <label htmlFor="request-name">Message</label>
              <span class="text-gray-500">......<span class="max-md:hidden">.......</span></span>
              <input class="form-control flex-1 py-2 -mb-1" type="message" id="request-message" name="message" maxlength="128" placeholder="{Enter}" required />
            </div>
            <label></label>
          </div>
        </div>
        <div class="border-t md:h-48 border-gray-300 px-6 py-5 font-mono-fancy text-gray-450 text-[12px]/[18px] hidden"></div>
      </form>
    </section>
  );
}