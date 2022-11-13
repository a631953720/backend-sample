const { checkInit, sequelize } = require('./module/pg');
const {
  findAllUser,
  findUserByUserName,
  updateAliasByUserName,
  updatePswByUserName,
  deleteUserByUserName
} = require('./module/user');

async function main() {
  await checkInit();
  // await sequelize.sync({ force: true });

  // const foo = await User.create({
  //   Name: 'foo',
  //   Password: 'foo',
  //   Alias: 'foo'
  // });

  // console.log(JSON.stringify(foo, null, 2));

  // const result = await User.findAll();
  // console.log(JSON.stringify(result, null, 2));

  console.log(await findAllUser());
  console.log(await updateAliasByUserName({ Name: 'foo', Alias: 'f22' }));
  console.log(await updatePswByUserName({ Name: 'foo', Alias: 'f22' }));
  console.log(await findUserByUserName('foo'));
  console.log(await deleteUserByUserName('foo'));
}

main();
