import serboLatinMessages from 'ra-language-serbo-latin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  'serbo-latin': serboLatinMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'serbo-latin');

<Admin i18nProvider={i18nProvider}>
  ...
</Admin>