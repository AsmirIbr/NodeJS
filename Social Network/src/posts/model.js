export default (sequelize, DataType) => {

  // const storytelling = {
  //     context: { 
  //     type: DataType.STRING
  //   }
  // };

  // const photo = {
  //     description: { 
  //     type: DataType.STRING
  //   }
  // };

  // const shared = {
  //   review: {
  //     type: DataType.BOOLEAN,
  //     defaultValue: false,
  //   }
  // }

  const Post = sequelize.define('posts', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },

    role: {
      type: DataType.ENUM,
      values: ['storytelling', 'photo', 'shared'],
      defaultValue: 'storytelling'
    },
    context: {
      type: DataType.STRING
    },
    createdAt: {
      type: DataType.DATE,
      default: new Date(Date.now()),
    },
    updatedAt: {
      type: DataType.DATE
    },
    deletedAt: {
      type: DataType.DATE
    }
    
  });
  return Post;
}