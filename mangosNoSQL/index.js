const { update } = require('lodash');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String, age: Number });

async function main()
{
    // add new objact
    const kitty = new Cat({ name: 'momy', age: 22})
    await kitty.save()

    // find ways
// const id = '64332d743e749a09aeecc8dd';
// const kitty = await Cat.findById(id);
// another way to find 
// const kitty = await Cat.findOne({name: 'bandar'});
// another way to find 
// const kitty = await Cat.find({
//     age: {
//         $gt: 21
//     }
// });

// update ways
// const id = '64332cafdd5c027cdc0a21e6';
// const kitty = await Cat.findById(id);
// kitty.age = 40
// await kitty.save();

// await Cat.updateOne({_id: '64332cafdd5c027cdc0a21e6'}, {name: 'ahmed'})
// await Cat.updateMany(
//     { age: { $gt: 39 } },
//     {
//         age: 22
//     }
//  );

//  delete 

// await Cat.deleteMany(
//     {age: {$gt: 21}}
// )


// console.log(kitty)
}
main();