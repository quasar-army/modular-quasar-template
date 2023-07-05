---
to: <%= directories.modules %>/<%= modulePascal %>/<%= modulePascal %>.ts
---
import { Model } from 'pinia-orm'
import { Attr, Uid } from 'pinia-orm/dist/decorators'

export default class <%= modulePascal %> extends Model {
  static entity = '<%= moduleSnakePlural %>'

  // Fields
  @Uid() declare id: string
  @Attr() declare some_value: null

  // Relationships
}
