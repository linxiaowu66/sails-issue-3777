/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true,
    },
    numOfArticles: 'integer',
    articles: {
      collection: 'article',
      via: 'category'
    }
  },

  afterUpdate: function(category, cb){

    // Find the new category by ID and populate its blogs
    Category.findOne({id: category.id}).populate('articles').exec(function(err, category){
      // Get the number of blogs in the new category
      console.log(category);
      var numOfArticles = category.articles.length;
      // Update the new category
      Category.update({id: category.id}, {numOfArticle: numOfArticles}).exec(function (err, cat){
        cb();
      });
    });

  },

};
