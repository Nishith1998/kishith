import { Component } from '@angular/core';

interface NavigationItem {
  label: string;
  routePath?: string;
  children?: NavigationItem[];
}

@Component({
  selector: 'app-navigation-items',
  templateUrl: './navigation-items.component.html',
  styleUrls: ['./navigation-items.component.scss'],
})
export class NavigationItemsComponent {
  navigationList: NavigationItem[] = [
    {
      label: 'Home',
      routePath: '/home',
    },
    {
      label: 'Main functions',
      children: [
        {
          label: 'Mandvo',
          routePath: '/mandvo',
        },
        {
          label: 'Sample Event',
          routePath: 'sampleEvent',
        },
      ],
    },
    {
      label: 'Events',
      routePath: '/home',
    },
    {
      label: 'Photo for the Day',
      routePath: '/home',
    },
  ];
}
