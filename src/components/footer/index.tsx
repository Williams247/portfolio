import { Container } from "../container";
import { Phone, Mail } from "../index";

const year = new Date().getFullYear();

export const Footer = () => (
  <footer id="footer" className="border-t border-white/10 bg-primary-blue-300">
    <Container>
      <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-7">
        <p className="text-sm leading-relaxed text-primary-gray-200">
          © {year} Williams Alex. <span className="text-primary-gray-100/90">All rights reserved.</span>
        </p>

        <nav
          className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3"
          aria-label="Footer contact"
        >
          <a
            href="tel:+2347012714644"
            className="inline-flex items-center gap-2.5 text-sm text-primary-gray-100 transition hover:text-white focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
          >
            <span className="text-primary-blue-100/90" aria-hidden>
              <Phone />
            </span>
            <span className="tabular-nums">+234 701 271 4644</span>
          </a>
          <a
            href="mailto:williamsalexjr@gmail.com"
            className="inline-flex min-w-0 max-w-full items-center gap-2.5 text-sm text-primary-gray-100 transition hover:text-white focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
          >
            <span className="shrink-0 text-primary-blue-100/90" aria-hidden>
              <Mail />
            </span>
            <span className="truncate sm:max-w-none">williamsalexjr@gmail.com</span>
          </a>
        </nav>
      </div>
    </Container>
  </footer>
);
