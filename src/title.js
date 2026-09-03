import config from '../site.config';

/** Browser tab title for a route, e.g. "Santiago Hopkins — Projects". */
export const pageTitle = (path) => {
  const entry = config.nav.find((item) => item.path === path);
  return entry && entry.path !== '/'
    ? `${config.name} — ${entry.label}`
    : config.siteTitle;
};
