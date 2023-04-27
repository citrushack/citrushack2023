interface Props {
  /** Linked text. */
  name: string;
  /** Link to external source. */
  link: string;
}

/** Linked text to an external source. */
export default function ExternalLink({ name, link }: Props) {
  return (
    <a target="_blank" rel="noreferrer noopener" href={link}>
      <span className={`font-bold hover:underline cursor-pointer text-gold`}>
        {name}
      </span>
    </a>
  );
}
