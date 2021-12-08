const db = require('../config/connection');
const { Item, ItemType, User } = require('../models');

const itemData = require('./masterItemData.json');
const itemTypeData = require('./itemTypeData.json');
const userData = require('./userSeeds.json');

db.once('open', async () => {
  // clean database
  
  await ItemType.deleteMany({});
  await Item.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  
  const itemTypes = await ItemType.insertMany(itemTypeData);
  const items = await Item.insertMany(itemData);
  const user = await User.insertMany(userData);

  // for (itemType of itemTypes) {
  //   console.log(itemType)
  // //   // randomly add each class to a school
  // //   const tempSchool = schools[Math.floor(Math.random() * schools.length)];
  // //   tempSchool.classes.push(newClass._id);
  // //   await tempSchool.save();
  //     const tempItemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
  //     item.Organic = tempItemType._id;
  //     await item.save();
  // //   // randomly add a professor to each class
  // //   const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
  // //   newClass.professor = tempProfessor._id;
  // //   await newClass.save();

  // //   // reference class on professor model, too
  // //   tempProfessor.classes.push(newClass._id);
  // //   await tempProfessor.save();
  // }

  console.log('all done!');
  process.exit(0);
});