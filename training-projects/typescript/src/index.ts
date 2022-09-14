enum FoodType { veg , nonVeg };

interface Food {
    price: number,
    type: FoodType,
    name: string
};

let foods: Food[] = [
    {
        name: 'chicken biriyani',
        price: 70,
        type: FoodType.nonVeg
    },
    {
        name: 'mushroom biriyani',
        price: 65,
        type: FoodType.veg
    },
    {
        name: 'prawn biriyani',
        price: 90,
        type: FoodType.nonVeg
    },
    {
        name: 'chicken 65',
        price: 110,
        type: FoodType.nonVeg
    }
];

// print all biriyani of type non veg
foods
    .filter(food => food.name.includes('biriyani') && food.type === FoodType.nonVeg)
    .forEach((food, index) => {
        console.log(`${(index + 1)}) ${food.name}\n`);
    });