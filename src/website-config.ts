export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Nick Foden',
  description: 'Keep pushing those walls back. 🤘😎🤘',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/NickFoden.png',
  lang: 'en',
  siteUrl: 'https://nickfoden.com',
  facebook: 'https://www.facebook.com/nickfoden',
  twitter: 'https://twitter.com/nickfoden',
  showSubscribe: true,
  mailchimpAction:
    'https://gmail.us20.list-manage.com/subscribe/post?u=ba663dfd0691a578ae30cb379&amp;id=a0fb5ad685',
  mailchimpName: 'a0fb5ad685',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is pretty into burritos',
};

export default config;
