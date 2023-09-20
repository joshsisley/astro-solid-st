export interface Props {
  href: string;
  type: string;
  text: string;
  className?: string;
  ariaLabel?: string;
  title?: string;
  disabled?: boolean;
}

export default function LinkButton(props: Props) {
  const additionalClasses = props.type === 'primary' ? 'btn-primary' : 'border-secondary bg-primary border-2 group-hover:border-transparent group-focus:border-transparent';
  const classes = `focus-ring absolute inset-0 transform rounded-sm opacity-100 transition disabled:opacity-50 ${additionalClasses}`
  return (
    <a href={props.href} class="group relative inline-flex text-sm font-medium focus:outline-none opacity-100 disabled:opacity-50 transition">
      <div class={classes}></div>
      <div class={`relative flex h-full w-full items-center justify-center whitespace-nowrap text-inverse space-x-5 px-5 py-3`}>
        {props.text}
      </div>
    </a>
  );
}