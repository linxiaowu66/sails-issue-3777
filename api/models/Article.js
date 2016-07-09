/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 40,
      defaultsTo: 'untitled'
    },
    
    /*article to category is a one-to-many association*/
    category: {
      model: 'category',
      required: true
    }

  },
  
};
