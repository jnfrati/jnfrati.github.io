export type GHRepository = {
  name: string;
  full_name: string;
  private: false;
  html_url: "https://github.com/jnfrati/100-days-of-code";
  description: "My own 100-days-of-code challenge";
  fork: true;
  contents_url: "https://api.github.com/repos/jnfrati/100-days-of-code/contents/{+path}";
  created_at: "2020-01-04T21:55:27Z";
  updated_at: "2021-09-21T17:42:13Z";
  pushed_at: "2021-09-21T17:42:06Z";
  size: 345;
  stargazers_count: 0;
  watchers_count: 0;
  language: string;
  default_branch: string;
};

export type GHPinnedRepo = {
  owner: string;
  repo: string;
  link: string;
  description: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: number;
};
