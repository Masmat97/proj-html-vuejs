import { reactive } from 'vue';
let myData = reactive({
    links: {
        home: [
            "Main Home",
            "Italian Restaurant",
            "Pizzeria Home",
            "Pizza Light",
            "Pizza Dark",
            "Fast Food Home"],
        pages: [
            "About Us",
            "Our Service",
            "Our Team",
            "Our History",
            "Reservation",
            "Book A Table I",
            "Book A Table II",
            "Contact Us",
            "Get In Touch",
            "Coming Soon",
            "404 Error Page"
        ],
        menu: {
            list_types: ["Don Peppe Menu", "Menu Light", "MEnu Filter Light", "Menu Dark", "Menu Filter Dark", "Menu Slider", "Restaurant Menu"],
            list_layout: ["3 Columns", "4 Columns", "4 Columns Wide", "5 Columns", "5 Columns Wide", "6 Columns"],
            product_types: ["Standard", "Grouped", "Variable", "New", "On Sale"],
            shop_pages: ["My Account", "Cart", "Checkout"]
        },
        event: ["Event List", "Event Single"],
        blog: 
            [
                {name :[ "Right Sidebar",  "Left Sidebar",  "Without Sidebar"] },
                {
                    name: "Post Types",
                    class :"dropdown-menu", 
                    submenu: [
                        "Standard",
                        "Gallery",
                        "Quote",
                        "Link",
                        "Audio",
                        "Video",
                        "No Sidebar"
                    ]
                }
            ],
        landing: "Landing",
        }

})
export default myData