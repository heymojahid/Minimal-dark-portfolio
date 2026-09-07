
import Container from './Container';
import BioText from '../landing/BioText';
import SocialLinks from '../landing/SocialLinks';
import Spotify from '../landing/Spotify';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { GitHubLogo } from '../icons/tech/GithubLogo';
import RepeatSeparator from '../ui/repeat-separator';
import VisitorCounter from '../landing/VisitorCounter';
import Image from 'next/image';

const Hero = ({ stars = 0 }: { stars?: number }) => {
  return (
    <Container className={`flex flex-col items-start justify-center`}>
      <div className="flex h-full w-full items-center">
        <div className="p-3 sm:p-5 shrink-0">
          <div className="w-fit rounded-[9px] border p-[3.8px] dark:border-neutral-700">
            <div className="box-border h-20 w-20 overflow-hidden rounded-[8px] border bg-neutral-200 object-cover p-1 select-none sm:h-25 sm:w-25 md:h-30 md:w-30 dark:bg-white">
              <Image
                src="/file_00000000494082118e02923b336f6b72.png"
                alt="Mojahid Hassan - Full-Stack Developer & Indie Maker"
                height={120}
                width={120}
                priority
                className="box-border h-full w-full object-cover transition-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 min-w-0 flex-col justify-center py-3 pr-3 gap-0.5 sm:gap-1 sm:py-5 sm:pr-5">
          <div className="flex items-center justify-between gap-1 overflow-hidden">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="custom" asChild>
                  <a
                    href="https://github.com/heymojahid/minimal_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <span>
                        <GitHubLogo />
                      </span>
                      {stars}
                    </div>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{stars} Stars on GitHub</p>
              </TooltipContent>
            </Tooltip>
            <VisitorCounter />
          </div>

          <h1 className="flex items-center text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-50 md:pb-0.5 leading-tight">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <span>Mojahid Hassan</span>
              <Image
                src="/images/icons8-verified-badge-100.png"
                alt="Verified Badge"
                width={24}
                height={24}
                className="size-4.5 sm:size-5.5 md:size-6 inline-block shrink-0 select-none align-middle"
              />
            </span>
          </h1>
          <span className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium text-neutral-500/80 dark:text-neutral-400 leading-snug">
            Full-Stack Developer & Indie Maker
          </span>
          <h2 className="text-[11px] sm:text-xs font-medium text-neutral-500/70 dark:text-neutral-400">
            18, West Bengal, India
          </h2>
        </div>
      </div>
      <RepeatSeparator />
      <BioText />
      <Spotify />
      <RepeatSeparator />
      <SocialLinks />
    </Container>
  );
};

export default Hero;
