import { FaqGrid } from '@/components/FAQ';
import ExternalLink from '@/components/ExternalLink';

export default function Faq() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:mt-0 max-w-[60rem] items-center">
      <h1 className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6">FAQ</h1>
      <p className="text-center">
        If you still can&apos;t find an answer to your question, feel free to
        email us at{' '}
        <ExternalLink
          name="citrushack@gmail.com"
          link="mailto:citrushack@gmail.com"
        />
        .
      </p>
      <FaqGrid />
    </section>
  );
}
