const db = db.getSiblingDB("todoApp");

db.tasks.insertMany([
  { title: "Acheter du lait", description: "Aller au supermarché pour acheter du lait", completed: false },
  { title: "Faire du sport", description: "Courir 30 minutes", completed: false },
  { title: "Lire un livre", description: "Lire 50 pages du roman en cours", completed: true }
]);

db.tasks.find().pretty();
