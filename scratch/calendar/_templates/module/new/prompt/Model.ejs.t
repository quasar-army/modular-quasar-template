---
to: <%= directories.modules %>/<%= modulePascal %>/<%= modulePascal %>.ts
---
import { Model } from 'pinia-orm'
import { Attr, Num } from 'pinia-orm/dist/decorators'

export default class <%= modulePascal %> extends Model {
  static entity = '<%= moduleSnakePlural %>'

  // Fields
  @Num(0, { notNullable: true }) declare id: number
  @Attr() declare some_value: null

  // Relationships
}
