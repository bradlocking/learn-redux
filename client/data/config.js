import Raven from 'raven-js';

const sentry_key = 'f7c73ff2a8be4abdb6139c7f4a866a1a';
const sentry_app = '164943';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
