declare interface SidebarMenuPage {
    icon: string
    name: string
    path: string
}

declare interface SidebarMenu {
    title: string
    pages: SidebarMenuPage[]
}
