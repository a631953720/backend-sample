const { DataTypes } = require('sequelize');
const { sequelize } = require('./pg');

const User = sequelize.define('User', {
  Name: {
    type: DataTypes.STRING,
    unique: true
  },
  Password: {
    type: DataTypes.STRING
  },
  Alias: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: 'User',
});

async function findAllUser() {
  try {
    const result = await User.findAll();
    return result.map((r) => r.dataValues);
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function findUserByUserName(Name) {
  try {
    const result = await User.findOne({
      where: { Name }
    });
    return result.dataValues;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function createUser({ Name, Password, Alias }) {
  try {
    await User.create({
      Name,
      Password,
      Alias
    });
    return true
  } catch (error) {
    console.error(error);
    return false
  }
}

async function updatePswByUserName({ Name, Password }) {
  try {
    await User.update({ Password }, {
      where: {
        Name
      }
    });
    return true
  } catch (error) {
    console.error(error);
    return false
  }
}

async function updateAliasByUserName({ Name, Alias }) {
  try {
    await User.update({ Alias }, {
      where: {
        Name
      }
    });
    return true
  } catch (error) {
    console.error(error);
    return false
  }
}

async function deleteUserByUserName(Name) {
  try {
    await User.destroy({
      where: {
        Name
      }
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  findAllUser,
  findUserByUserName,
  createUser,
  updateAliasByUserName,
  updatePswByUserName,
  deleteUserByUserName
};
