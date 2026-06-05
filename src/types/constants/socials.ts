export type TSocial = "git" | "mail" | "telegram" | "vk"
export interface ISocial {
  id: number,
  title: string,
  link: string,
  icon: string,
  aria: string,
}

export const socials: Record<TSocial, ISocial> = {
  git: {
    id: 1,
    title: "@en1ere",
    link: "https://github.com/En1ere",
    icon: "IconGit",
    aria: "git, link",
  },
  mail: {
    id: 2,
    title: "Mail",
    link: "shadow-ek-alex@mail.ru",
    icon: "IconMail",
    aria: "mail, link",
  },
  telegram: {
    id: 3,
    title: "@Alexanderrrrrrrrrr",
    link: "https://t.me/Alexanderrrrrrrrrr",
    icon: "IconTg",
    aria: "telegram, link",
  },
  vk: {
    id: 4,
    title: "@en1ere",
    link: "https://vk.com/en1ere",
    icon: "IconVk",
    aria: "vk, link",
  },
} as const
