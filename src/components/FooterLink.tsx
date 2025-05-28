export default function FooterLink() {
  return (
    <div className="w-full flex justify-center text-xs ">
      <span>Coded by &nbsp;</span>
      <LinkFooter
        name="Javier Espindola"
        reference="https://github.com/Micolash89"
      />
    </div>
  );
}

export function LinkFooter({
  name,
  reference,
}: {
  name: string;
  reference: string;
}) {
  return (
    <a
      className="hover:underline hover:text-neutral-400"
      href={reference}
      target="_blank"
    >
      {`  ${name}`}
    </a>
  );
}
