export interface MenuItem {
    id: number;
    name: string;
    category: string;
    halfPrice?: number;
    fullPrice?: number;
    price?: number;
    description?: string;
    isVeg: boolean;
    hasHalfFull: boolean;
}

export const menuCategories = [
    "All",
    "Veg Starters",
    "Veg Momos",
    "Paneer Momos",
    "Veg Rice",
    "Egg Starters",
    "Egg Rice",
    "Egg Noodles",
    "Chicken Starters",
    "Chicken Momos",
    "Chicken Noodles",
    "Chicken Rice",
    "Dum Biryani",
    "Rotis & Chapathi",
    "Meals",
];

export const menuData: MenuItem[] = [
    // Veg Starters
    { id: 1, name: "Veg Manchurian", category: "Veg Starters", halfPrice: 70, fullPrice: 130, isVeg: true, hasHalfFull: true },
    { id: 2, name: "Spl. Veg Kaju Manchurian", category: "Veg Starters", halfPrice: 100, fullPrice: 190, isVeg: true, hasHalfFull: true },
    { id: 3, name: "Paneer Manchurian", category: "Veg Starters", halfPrice: 120, fullPrice: 230, isVeg: true, hasHalfFull: true },
    { id: 4, name: "Paneer 65", category: "Veg Starters", halfPrice: 130, fullPrice: 250, isVeg: true, hasHalfFull: true },
    { id: 5, name: "Baby Corn Manchurian", category: "Veg Starters", halfPrice: 130, fullPrice: 250, isVeg: true, hasHalfFull: true },
    { id: 6, name: "Mushroom Manchurian", category: "Veg Starters", halfPrice: 130, fullPrice: 250, isVeg: true, hasHalfFull: true },

    // Veg Momos
    { id: 7, name: "Steam Veg Momos [6 Pcs]", category: "Veg Momos", price: 89, isVeg: true, hasHalfFull: false },
    { id: 8, name: "Fried Veg Momos [6 Pcs]", category: "Veg Momos", price: 99, isVeg: true, hasHalfFull: false },
    { id: 9, name: "Veg Schezwan Momos [6 Pcs]", category: "Veg Momos", price: 109, isVeg: true, hasHalfFull: false },

    // Paneer Momos
    { id: 10, name: "Steam Paneer Momos [6 Pcs]", category: "Paneer Momos", price: 110, isVeg: true, hasHalfFull: false },
    { id: 11, name: "Fried Paneer Momos [6 Pcs]", category: "Paneer Momos", price: 120, isVeg: true, hasHalfFull: false },
    { id: 12, name: "Schezwan Paneer Momos [6 Pcs]", category: "Paneer Momos", price: 130, isVeg: true, hasHalfFull: false },

    // Veg Rice
    { id: 13, name: "Veg Rice", category: "Veg Rice", halfPrice: 70, fullPrice: 130, isVeg: true, hasHalfFull: true },
    { id: 14, name: "Veg Soft Rice", category: "Veg Rice", halfPrice: 80, fullPrice: 150, isVeg: true, hasHalfFull: true },
    { id: 15, name: "Veg Manchurian Rice", category: "Veg Rice", halfPrice: 90, fullPrice: 170, isVeg: true, hasHalfFull: true },
    { id: 16, name: "Veg Schezwan Manchurian Rice", category: "Veg Rice", halfPrice: 100, fullPrice: 190, isVeg: true, hasHalfFull: true },
    { id: 17, name: "Veg Schezwan Rice", category: "Veg Rice", halfPrice: 90, fullPrice: 170, isVeg: true, hasHalfFull: true },
    { id: 18, name: "Veg Jeera Rice", category: "Veg Rice", halfPrice: 110, fullPrice: 210, isVeg: true, hasHalfFull: true },
    { id: 19, name: "Veg Paneer Rice", category: "Veg Rice", halfPrice: 120, fullPrice: 230, isVeg: true, hasHalfFull: true },
    { id: 20, name: "Veg Schezwan Paneer Rice", category: "Veg Rice", halfPrice: 130, fullPrice: 250, isVeg: true, hasHalfFull: true },
    { id: 21, name: "Veg Kaju Rice", category: "Veg Rice", halfPrice: 90, fullPrice: 170, isVeg: true, hasHalfFull: true },
    { id: 22, name: "Veg Kaju Paneer Rice", category: "Veg Rice", halfPrice: 130, fullPrice: 250, isVeg: true, hasHalfFull: true },
    { id: 23, name: "Veg Kaju Manchurian Rice", category: "Veg Rice", halfPrice: 100, fullPrice: 190, isVeg: true, hasHalfFull: true },

    // Egg Starters
    { id: 24, name: "Egg Manchurian Starter", category: "Egg Starters", halfPrice: 80, fullPrice: 150, isVeg: false, hasHalfFull: true },
    { id: 25, name: "Double Egg Manchurian Starter", category: "Egg Starters", halfPrice: 90, fullPrice: 170, isVeg: false, hasHalfFull: true },
    { id: 26, name: "Egg Schezwan Manchurian Starter", category: "Egg Starters", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 27, name: "Double Egg Schezwan Manchurian Starter", category: "Egg Starters", halfPrice: 110, fullPrice: 210, isVeg: false, hasHalfFull: true },
    { id: 28, name: "Egg Kaju Manchurian Starter", category: "Egg Starters", halfPrice: 120, fullPrice: 230, isVeg: false, hasHalfFull: true },
    { id: 29, name: "Double Egg Kaju Manchurian Starter", category: "Egg Starters", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 30, name: "Egg Kaju Schezwan Manchurian", category: "Egg Starters", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 31, name: "Double Egg Kaju Schezwan Manchurian", category: "Egg Starters", halfPrice: 140, fullPrice: 270, isVeg: false, hasHalfFull: true },

    // Egg Rice
    { id: 32, name: "Single Egg Rice", category: "Egg Rice", halfPrice: 80, fullPrice: 150, isVeg: false, hasHalfFull: true },
    { id: 33, name: "Double Egg Rice", category: "Egg Rice", halfPrice: 90, fullPrice: 170, isVeg: false, hasHalfFull: true },
    { id: 34, name: "Egg Soft Rice", category: "Egg Rice", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 35, name: "Double Egg Soft Rice", category: "Egg Rice", halfPrice: 110, fullPrice: 210, isVeg: false, hasHalfFull: true },
    { id: 36, name: "Egg Manchurian Rice", category: "Egg Rice", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 37, name: "Double Egg Manchurian Rice", category: "Egg Rice", halfPrice: 110, fullPrice: 210, isVeg: false, hasHalfFull: true },
    { id: 38, name: "Single Egg Schezwan Rice", category: "Egg Rice", halfPrice: 120, fullPrice: 230, isVeg: false, hasHalfFull: true },
    { id: 39, name: "Double Egg Schezwan Rice", category: "Egg Rice", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 40, name: "Egg Kaju Rice", category: "Egg Rice", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 41, name: "Double Egg Kaju Rice", category: "Egg Rice", halfPrice: 120, fullPrice: 230, isVeg: false, hasHalfFull: true },

    // Egg Noodles
    { id: 42, name: "Single Egg Noodles", category: "Egg Noodles", halfPrice: 80, fullPrice: 150, isVeg: false, hasHalfFull: true },
    { id: 43, name: "Double Egg Noodles", category: "Egg Noodles", halfPrice: 90, fullPrice: 170, isVeg: false, hasHalfFull: true },
    { id: 44, name: "Egg Soft Noodles", category: "Egg Noodles", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 45, name: "Double Egg Soft Noodles", category: "Egg Noodles", halfPrice: 110, fullPrice: 210, isVeg: false, hasHalfFull: true },
    { id: 46, name: "Egg Manchurian Noodles", category: "Egg Noodles", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 47, name: "Double Egg Manchurian Noodles", category: "Egg Noodles", halfPrice: 110, fullPrice: 220, isVeg: false, hasHalfFull: true },

    // Chicken Starters
    { id: 48, name: "Chicken Manchurian", category: "Chicken Starters", halfPrice: 230, fullPrice: 260, isVeg: false, hasHalfFull: true },
    { id: 49, name: "Chilli Chicken", category: "Chicken Starters", halfPrice: 240, fullPrice: 270, isVeg: false, hasHalfFull: true },
    { id: 50, name: "Chicken 65", category: "Chicken Starters", halfPrice: 140, fullPrice: 270, isVeg: false, hasHalfFull: true },
    { id: 51, name: "Chicken Lollipop Wet [4 Pcs]", category: "Chicken Starters", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 52, name: "Chicken Lollipop Dry Fry [4 Pcs]", category: "Chicken Starters", halfPrice: 140, fullPrice: 270, isVeg: false, hasHalfFull: true },
    { id: 53, name: "Special Chicken Kaju Manchurian", category: "Chicken Starters", halfPrice: 150, fullPrice: 290, isVeg: false, hasHalfFull: true },

    // Chicken Momos
    { id: 54, name: "Steam Chicken Momos [6 Pcs]", category: "Chicken Momos", price: 119, isVeg: false, hasHalfFull: false },
    { id: 55, name: "Fried Chicken Momos [6 Pcs]", category: "Chicken Momos", price: 129, isVeg: false, hasHalfFull: false },
    { id: 56, name: "Schezwan Chicken Momos [6 Pcs]", category: "Chicken Momos", price: 139, isVeg: false, hasHalfFull: false },

    // Chicken Noodles
    { id: 57, name: "Chicken Noodles", category: "Chicken Noodles", halfPrice: 90, fullPrice: 170, isVeg: false, hasHalfFull: true },
    { id: 58, name: "Double Egg Chicken Noodles", category: "Chicken Noodles", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 59, name: "Chicken Soft Noodles", category: "Chicken Noodles", halfPrice: 110, fullPrice: 210, isVeg: false, hasHalfFull: true },
    { id: 60, name: "Double Egg Chicken Soft Noodles", category: "Chicken Noodles", halfPrice: 120, fullPrice: 220, isVeg: false, hasHalfFull: true },
    { id: 61, name: "Chicken Schezwan Noodles", category: "Chicken Noodles", halfPrice: 180, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 62, name: "Double Egg Chicken Schezwan Noodles", category: "Chicken Noodles", halfPrice: 140, fullPrice: 270, isVeg: false, hasHalfFull: true },

    // Chicken Rice
    { id: 63, name: "Chicken Rice", category: "Chicken Rice", halfPrice: 90, fullPrice: 170, isVeg: false, hasHalfFull: true },
    { id: 64, name: "Double Egg Chicken Rice", category: "Chicken Rice", halfPrice: 100, fullPrice: 190, isVeg: false, hasHalfFull: true },
    { id: 65, name: "Chicken Soft Rice", category: "Chicken Rice", halfPrice: 110, fullPrice: 210, isVeg: false, hasHalfFull: true },
    { id: 66, name: "Double Egg Chicken Soft Rice", category: "Chicken Rice", halfPrice: 120, fullPrice: 230, isVeg: false, hasHalfFull: true },
    { id: 67, name: "Chicken Schezwan Rice", category: "Chicken Rice", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 68, name: "Double Egg Chicken Schezwan Rice", category: "Chicken Rice", halfPrice: 140, fullPrice: 270, isVeg: false, hasHalfFull: true },
    { id: 69, name: "Kaju Special Chicken Rice", category: "Chicken Rice", halfPrice: 140, fullPrice: 250, isVeg: false, hasHalfFull: true },

    // Dum Biryani
    { id: 70, name: "Hyderabadi Special Chicken Dum Biryani", category: "Dum Biryani", halfPrice: 120, fullPrice: 230, isVeg: false, hasHalfFull: true },
    { id: 71, name: "Big Piece Chicken Biryani", category: "Dum Biryani", halfPrice: 140, fullPrice: 270, isVeg: false, hasHalfFull: true },

    // Rotis & Chapathi
    { id: 72, name: "Jowar Roti (2 Pcs + Veg Curry)", category: "Rotis & Chapathi", price: 70, isVeg: true, hasHalfFull: false },
    { id: 73, name: "Jowar Roti (2 Pcs + Non-Veg Curry)", category: "Rotis & Chapathi", price: 100, isVeg: false, hasHalfFull: false },
    { id: 74, name: "Chapathi (2 Pcs + Any Curry)", category: "Rotis & Chapathi", price: 50, isVeg: true, hasHalfFull: false },
    { id: 75, name: "Chapathi (2 Pcs + Non-Veg Curry)", category: "Rotis & Chapathi", price: 90, isVeg: false, hasHalfFull: false },
    { id: 76, name: "Extra Roti / Chapathi (per piece)", category: "Rotis & Chapathi", price: 15, isVeg: true, hasHalfFull: false },

    // Meals
    { id: 77, name: "Veg Mini Meals (Curry+Sambar+Dry+Curd+Sweet)", category: "Meals", price: 100, isVeg: true, hasHalfFull: false },
    { id: 78, name: "Non-Veg Mini Meals - Chicken Rice", category: "Meals", halfPrice: 120, fullPrice: 230, isVeg: false, hasHalfFull: true },
    { id: 79, name: "Non-Veg Mini Meals - Fish Curry Rice", category: "Meals", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
    { id: 80, name: "Boti Curry Rice", category: "Meals", halfPrice: 130, fullPrice: 250, isVeg: false, hasHalfFull: true },
];
