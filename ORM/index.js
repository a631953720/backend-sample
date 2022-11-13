// 引入 sequelize 套件
const { Sequelize, DataTypes } = require('sequelize');

// 透過 new 建立 Sequelize 這個 class，而 sequelize 就是物件 instance
const sequelize = new Sequelize('icap', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3389
});

async function checkInit() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkInit().then(async () => {
  // Id, CreatedDate, DeletedFlag, Dynamic, EventMessage, GroupId, Icon, LastModifiedDate, Location, Name, Numberical, Unit
  const Data = sequelize.define('data', {
    Id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    CreatedDate: {
      type: DataTypes.DATE
    },
    DeletedFlag: {
      type: DataTypes.BOOLEAN
    },
    // EventMessage
    GroupId: {
      type: DataTypes.INTEGER
    },
    Icon: {
      type: DataTypes.STRING
    },
    LastModifiedDate: {
      type: DataTypes.DATE
    },
    Location: {
      type: DataTypes.STRING
    },
    Name: {
      type: DataTypes.STRING
    },
    Numberical: {
      type: DataTypes.BOOLEAN
    },
    Unit: {
      type: DataTypes.STRING
    }
  });

  // Id, ChartId, CreatedDate, DataId, DeletedFlag, IsThreshold, LastModifiedDate, Name, ResendTime, SettingStr, ThresholdId, Width
  const Widget = sequelize.define('widget', {
    Id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    ChartId: {
      type: DataTypes.INTEGER
    },
    CreatedDate: {
      type: DataTypes.DATE
    },
    DataId: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    DeletedFlag: {
      type: DataTypes.BOOLEAN
    },
    LastModifiedDate: {
      type: DataTypes.DATE
    },
    Name: {
      type: DataTypes.STRING
    },
    ResendTime: {
      type: DataTypes.INTEGER
    },
    SettingStr: {
      type: DataTypes.STRING
    },
    // ThresholdId
    Width: {
      type: DataTypes.TINYINT
    }
  }, {
    sequelize,
    timestamps: false, // 控制是否自動查詢 createAt、updateAt 的欄位
    tableName: 'widget' // 指定table名稱，否則直接使用define欄位並+'s'，如 define('widget') => 會查詢 widgets 的資料表
  });
  
  const widgets = await Widget.findAll();
  console.log(widgets.every(widget => widget instanceof Widget));
  console.log(JSON.stringify(widgets, null, 2));
});
