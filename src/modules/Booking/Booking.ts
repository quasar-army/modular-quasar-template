import { Model } from 'pinia-orm'
import { Attr, Num } from 'pinia-orm/dist/decorators'

export default class Booking extends Model {
  static entity = 'bookings'

  // Fields
  @Num(0, { notNullable: true }) declare id: number
  @Attr() declare some_value: null

  // Relationships
}
