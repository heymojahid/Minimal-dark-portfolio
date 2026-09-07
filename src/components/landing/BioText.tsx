import SectionHeading from '../common/SectionHeading';

const BioText = () => {
  return (
    <>
      <SectionHeading heading="About" />
      <div className="space-y-5 px-4 py-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-base font-normal whitespace-pre-wrap text-neutral-800 md:text-base dark:text-neutral-300">
          <ul className="list-disc space-y-2">
            <li>
              I'm a{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Full-Stack Developer & Indie Maker
              </b>{' '}
              passionate about turning ideas into useful digital products.
            </li>

            <li>
              I design and build modern web applications with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                React, Next.js, TypeScript, Node.js, and Tailwind CSS
              </b>
              , focusing on clean interfaces, smooth user experiences, and performance.
            </li>

            <li>
              I also work with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                PostgreSQL, MongoDB, REST APIs, and modern backend technologies
              </b>{' '}
              to build reliable and scalable full-stack applications.
            </li>

            <li>
              I enjoy transforming ideas into{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                simple, practical products
              </b>{' '}
              that solve real problems while balancing functionality, performance, and great design.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BioText;
