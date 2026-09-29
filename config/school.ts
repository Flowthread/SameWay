// School configuration.
//
// Override these per deployment by setting environment variables in
// `.env.local` (or your hosting provider's env settings):
//
//   NEXT_PUBLIC_SCHOOL_DOMAIN=@yourschool.edu
//   NEXT_PUBLIC_SCHOOL_NAME=Your School Name
//
// Only variables prefixed with NEXT_PUBLIC_ are available in the browser,
// so prefer that prefix. Bare SCHOOL_DOMAIN / SCHOOL_NAME are also read as a
// fallback for server-side and build-time use.

const fromEnv = (value?: string) => (value && value.trim() ? value.trim() : undefined);

export const SCHOOL_DOMAIN =
  fromEnv(process.env.NEXT_PUBLIC_SCHOOL_DOMAIN) ??
  fromEnv(process.env.SCHOOL_DOMAIN) ??
  '@yourschool.edu';

export const SCHOOL_NAME =
  fromEnv(process.env.NEXT_PUBLIC_SCHOOL_NAME) ??
  fromEnv(process.env.SCHOOL_NAME) ??
  'Your School Name';

const normalize = (value: string) => value.trim().toLowerCase();

/** True when `email` belongs to the configured school domain. */
export const isSchoolEmail = (email: string): boolean =>
  normalize(email).endsWith(normalize(SCHOOL_DOMAIN));
