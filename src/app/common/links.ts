import {LinksProps} from '../interfaces/links-props';
import { TopbarProps } from '../interfaces/topbar-props';

export class Links {

  get topbarLinks(): TopbarProps {
    return topbar;
  }

  get sidebarLinks(): Array<LinksProps> {
    return sidebar;
  }
}

const sidebar: Array<LinksProps> = [
  {
    href: "/",
    iconClasses: "fa fa-home mx-auto fa-1x",
    title: "Home",
    tooltipSide: "right"
  },
  {
    href: "/form",
    iconClasses: "far fa-plus-square mx-auto fa-1x",
    title: "Forms",
    tooltipSide: "right"
  },
  {
    href: "/user",
    iconClasses: "fa fa-users mx-auto fa-1x",
    title: "Users",
    tooltipSide: "right"
  }
];

const topbar: TopbarProps = {
  forms: [
    {title: 'list', iconClasses: 'far fa-list-alt mr-2', href: 'list'},
    {title: 'records', iconClasses: 'fa fa-clipboard-list mr-2', href: 'records'},
    {title: 'permissions', iconClasses: 'fa fa-clipboard-list mr-2', href: 'permisssions'}
  ],
  users: []
};
