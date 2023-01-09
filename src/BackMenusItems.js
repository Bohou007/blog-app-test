export default {
    items: [{
            id: "dashboard",
            title: "Tableau de bord",
            type: "item",
            position: "nav",
            url: "/dashboard/accueil",
            icon: "feather icon-home",
        },
        {
            id: "posts",
            title: "Articles",
            type: "item",
            position: "nav",
            url: "/dashboard/all-posts",
            icon: "feather icon-edit",
        },
        {
            id: "categories",
            title: "Categories",
            type: "item",
            position: "nav",
            url: "/dashboard/all-categories",
            icon: "feather icon-file-text",
        },
        {
            id: "account-manager",
            title: "Mon Compte",
            type: "item",
            position: "nav",
            url: "#",
            icon: "feather icon-download",
        },
    ],
    itemsDropdown: [{
            id: "dashboard",
            title: "Tableau de bord",
            type: "item",
            position: "nav",
            url: "/dashboard/accueil",
            icon: "feather icon-home",
        },
        {
            id: "account-manager",
            title: "Mon Compte",
            type: "item",
            position: "nav",
            url: "#",
            icon: "feather icon-download",
        },
    ],
};