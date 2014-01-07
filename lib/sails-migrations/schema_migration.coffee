TABLE_NAME = "sails_schema_migrations"
INDEX_NAME = "unique_schema_migrations"
Waterline = require('waterline')

module.exports = (adapterName)->
  Waterline.Collection.extend(
    tableName: "sails_schema_migrations"
    adapter: adapterName
    migrate: 'safe'
    autoCreatedAt: false
    autoUpdatedAt: false
    attributes:
      version: 
        type: 'INTEGER'
        primaryKey: true
        required: true
        index: true
        #null: true TODO: how do we validate this?
  )