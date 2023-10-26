class Chef {
    createDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  const chef = new Chef();
  const dinner1 = chef.createDinner("Salad", "Steak", "Ice Cream");
  const dinner2 = chef.createDinner("Soup", "Fish", "Cake");
  const dinner3 = chef.createDinner("Bread", "Chicken", "Fruit");